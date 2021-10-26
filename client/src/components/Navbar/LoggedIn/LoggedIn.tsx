import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { useAuth } from '../../../context/useAuthContext';

import useStyles from './useStyles';

export default function LoggedIn(): JSX.Element {
  const classes = useStyles();

  const { logout } = useAuth();

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
