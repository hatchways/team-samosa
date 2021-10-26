import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { useAuth } from '../../context/useAuthContext';

import useStyles from './useStyles';

interface Props {
  elevation: number;
  color: 'inherit' | 'primary' | 'secondary' | 'transparent' | undefined;
}

export default function NavBar({ elevation, color }: Props): JSX.Element {
  const classes = useStyles();

  const { loggedInUser, logout } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  function loggedout() {
    return (
      <React.Fragment>
        <Grid item>
          <Button className={classes.button} size="large">
            <Box px={4}>Become a sitter</Box>
          </Button>
          <Button className={classes.button} href="/login" color="primary" variant="outlined" size="large">
            Login
          </Button>
          <Button href="/signup" color="primary" variant="contained" size="large">
            Sign Up
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
  function loggedin() {
    return (
      <React.Fragment>
        <Grid item>
          <Typography variant="subtitle1">
            <Box pr={8}>MySitters</Box>
          </Typography>
        </Grid>
        <Grid item>
          <Box pr={8}>
            <Badge color="primary" variant="dot">
              <Typography variant="subtitle1">Messages</Typography>
            </Badge>
          </Box>
        </Grid>
        <Grid item>
          <IconButton onClick={handleClick}>
            <Avatar className={classes.avatar} />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Menu>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <AppBar elevation={elevation} color={color} position="fixed">
      <Toolbar className={classes.toolbar}>
        <img src="/Paw-print.svg" className={classes.logoImg} alt="LovingSitter Logo" />
        <Box className={classes.logo}>
          <Typography variant="h5" className={classes.logoText}>
            LovingSitter.
          </Typography>
        </Box>
        {loggedInUser ? loggedin() : loggedout()}
      </Toolbar>
    </AppBar>
  );
}
