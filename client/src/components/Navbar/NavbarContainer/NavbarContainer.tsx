import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import React from 'react';

import useStyles from './useStyles';
import NavbarContent from '../NavbarContent/NavbarContent';

export default function NavbarContainer(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper elevation={16} className={classes.root}>
      <NavbarContent />
    </Paper>
  );
}
