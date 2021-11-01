import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export default function Login(): JSX.Element {
  const classes = useStyles();

  return (
    <Typography className={classes.welcome} component="h1" variant="h5">
      MOCK2
    </Typography>
  );
}
