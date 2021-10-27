import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './useStyles';

export default function LoggedOut(): JSX.Element {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item>
        <Button className={classes.button} size="large">
          <Box px={4}>Become a sitter</Box>
        </Button>
        <Button className={classes.button} to="/login" component={Link} color="primary" variant="outlined" size="large">
          Login
        </Button>
        <Button to="/signup" component={Link} color="primary" variant="contained" size="large">
          Sign Up
        </Button>
      </Grid>
    </React.Fragment>
  );
}
