import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
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
      <Box mr={8}>
        <Link href="/dashboard/my-sitters" color="inherit">
          <Typography variant="subtitle1">MySitters</Typography>
        </Link>
      </Box>
      <Box mr={8}>
        <Link href="/dashboard/messages" color="inherit">
          <Badge color="primary" variant="dot">
            <Typography variant="subtitle1">Messages</Typography>
          </Badge>
        </Link>
      </Box>
      <IconButton onClick={handleClick}>
        <Avatar className={classes.avatar} />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
