import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import NavWrapper from './components/NavWrapper/NavWrapper';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import NavBar from './components/Navbar/NavBar';

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
                  <NavWrapper>
                    <Login />
                  </NavWrapper>
                </Route>
                <Route exact path="/signup">
                  <NavWrapper>
                    <Signup />
                  </NavWrapper>
                </Route>
                <Route exact path="/profiles">
                  <NavWrapper>{/* <Profiles /> */}</NavWrapper>
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
