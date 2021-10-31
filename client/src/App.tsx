import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/Navbar/NavBar';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

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
                <Route exact path="/">
                  <Welcome />
                </Route>
                <Route exact path="/login">
                  <NavBar elevation={16} color="inherit" />
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <NavBar elevation={16} color="inherit" />
                  <Signup />
                </Route>
                <Route exact path="/profiles">
                  <NavBar elevation={16} color="inherit" />
                  {/* TODO: add Profiles component */}
                </Route>
                <Route path="/dashboard">
                  <NavBar elevation={16} color="inherit" />
                  <Dashboard />
                </Route>
                <Route path="*">
                  <Redirect to="/" />
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
