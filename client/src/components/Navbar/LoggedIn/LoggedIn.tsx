import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import React from 'react';
import { useAuth } from '../../../context/useAuthContext';
import { useState, useEffect } from 'react';
import { getProfile } from '../../../helpers/APICalls/getProfile';
import { useSnackBar } from '../../../context/useSnackbarContext';

import useStyles from './useStyles';

export default function LoggedIn(): JSX.Element {
  const classes = useStyles();

  const { updateSnackBarMessage } = useSnackBar();

  const { logout } = useAuth();

  const [isSitter, setIsSitter] = useState<boolean | undefined>(false);

  useEffect(() => {
    (async function () {
      const data = await getProfile();
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else {
        setIsSitter(data.success?.profile.isSitter);
      }
    })();
  }, [updateSnackBarMessage]);

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
        {isSitter && (
          <Link to="/dashboard/my-jobs" component={RouterLink} color="inherit">
            <Typography variant="subtitle1">My Jobs</Typography>
          </Link>
        )}
      </Box>
      <Box mr={8}>
        <Link to="/dashboard/my-sitters" component={RouterLink} color="inherit">
          <Typography variant="subtitle1">My Sitters</Typography>
        </Link>
      </Box>
      <Box mr={8}>
        <Link to="/dashboard/messages" component={RouterLink} color="inherit">
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
        <MenuItem to="/dashboard/my-profile" component={RouterLink}>
          Profile
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
