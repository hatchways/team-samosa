import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
interface Props extends RouteProps {
  component: React.ComponentType;
}
const ProtectedRoute = ({ component: Component, ...rest }: Props): JSX.Element => {
  const { loggedInUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedInUser ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
