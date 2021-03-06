import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoggedIn from './LoggedIn/LoggedIn';
import LoggedOut from './LoggedOut/LoggedOut';
import { useAuth } from '../../context/useAuthContext';
import { Link } from 'react-router-dom';

import useStyles from './useStyles';

interface Props {
  elevation: number;
  color: 'inherit' | 'primary' | 'secondary' | 'transparent' | undefined;
}

export default function NavBar({ elevation, color }: Props): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();

  return (
    <AppBar elevation={elevation} color={color} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Link to="/dashboard">
          <img src="/Paw-print.svg" className={classes.logoImg} alt="LovingSitter Logo" />
        </Link>
        <Box className={classes.logo}>
          <Typography variant="h5" className={classes.logoText}>
            <Link to="/dashboard" className={classes.logoTextLink}>
              LovingSitter.
            </Link>
          </Typography>
        </Box>

        {loggedInUser ? <LoggedIn /> : <LoggedOut />}
      </Toolbar>
    </AppBar>
  );
}
