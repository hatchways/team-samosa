import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import ProfileEditionMock from './pages/ProfileSkeleton/ProfileEditionMock/ProfileEditionMock';
import ProfilePhoto from './pages/ProfileSkeleton/ProfilePhoto/ProfilePhoto';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/Navbar/NavBar';
import ProfileListings from './components/ProfileListings/ProfileListings';
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
                <Route exact path="/profilePhoto" component={ProfilePhoto} />
                <Route exact path="/signup" component={Signup} />
                <Route path="*">
                  <Redirect to="/profilePhoto" />
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
