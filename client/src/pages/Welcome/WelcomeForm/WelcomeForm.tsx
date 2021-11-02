import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import ModalButton from '../../../components/Modal/ModalButton/ModalButton';
import DemoButton from '../../../components/DemoButton/DemoButton';

export default function Login(): JSX.Element {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <label htmlFor="email">
        <Typography variant="overline">Where</Typography>
      </label>
      <TextField
        id="email"
        placeholder="Anywhere"
        fullWidth
        margin="normal"
        name="email"
        autoComplete="email"
        autoFocus
        variant="outlined"
      />
      <label htmlFor="password">
        <Typography variant="overline">Drop in / Drop off</Typography>
      </label>
      <TextField
        id="password"
        placeholder="Your password"
        fullWidth
        margin="normal"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <Box textAlign="center">
        <ModalButton>Find my dog sitter</ModalButton>
      </Box>
    </form>
  );
}
