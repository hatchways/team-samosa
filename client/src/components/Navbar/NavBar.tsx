import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoggedIn from './LoggedIn/LoggedIn';
import LoggedOut from './LoggedOut/LoggedOut';
import { useAuth } from '../../context/useAuthContext';

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
        <img src="/Paw-print.svg" className={classes.logoImg} alt="LovingSitter Logo" />

        <Box className={classes.logo}>
          <Typography variant="h5" className={classes.logoText}>
            LovingSitter.
          </Typography>
        </Box>

        {loggedInUser ? <LoggedIn /> : <LoggedOut />}
      </Toolbar>
    </AppBar>
  );
}
