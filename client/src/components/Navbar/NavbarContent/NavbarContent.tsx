import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

import useStyles from './useStyles';

export default function NavbarContent(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (status: string) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function loggedout() {
    return (
      <React.Fragment>
        <Grid item>
          <Button size="large">
            <Box px={4}>Become a sitter</Box>
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.login} color="primary" variant="outlined" size="large">
            Login
          </Button>
          <Button color="primary" variant="contained" size="large">
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
          <Button size="large">Become a sitter</Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">MySitters</Typography>
        </Grid>
        <Grid item>
          <Badge color="primary" variant="dot">
            <Typography variant="subtitle1">Messages</Typography>
          </Badge>
        </Grid>
        <Grid item>
          <IconButton onClick={handleClick}>
            <Avatar className={classes.avatar} />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => handleMenuItemClick('logout')}>Logout</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('profile')}>Profile</MenuItem>
          </Menu>
        </Grid>
      </React.Fragment>
    );
  }
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid container justify="space-between" alignItems="center" className={classes.grid} spacing={6}>
        <Grid item className={classes.logo}>
          <Typography variant="h5" className={classes.logoText}>
            {/* <img className={classes.logoImg} src="Paw-print.svg" /> */}
            LovingSitter.
          </Typography>
        </Grid>
        {loggedin()}
      </Grid>
    </Grid>
  );
}
