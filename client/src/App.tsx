import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import ProfileEditionMock from './pages/ProfileSkeleton/ProfileEditionMock/ProfileEditionMock';
import ProfilePhotoMock from './pages/ProfileSkeleton/ProfileEditionMock/ProfileEditionMock';
import Dashboard from './pages/Dashboard/Dashboard';
import MySitters from './pages/MySitters/MySitters';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/profileEditionMock" component={ProfileEditionMock} />
                <Route exact path="/profilePhotoMock" component={ProfilePhotoMock} />
                <Route exact path="/signup" component={Signup} />
                <Route path="*">
                  <Redirect to="/profileEditionMock" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
