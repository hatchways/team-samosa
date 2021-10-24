import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

const ProtectedRoute = ({ component: Component, ...rest }: React.PropsWithChildren<any>) => {
  const { loggedInUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
