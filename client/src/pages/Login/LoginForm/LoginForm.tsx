import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import ModalButton from '../../../components/Modal/ModalButton/ModalButton';
import DemoButton from '../../../components/DemoButton/DemoButton';

interface Props {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <label htmlFor="email">
            <Typography variant="overline">Email address</Typography>
          </label>
          <TextField
            id="email"
            placeholder="Your email"
            fullWidth
            margin="normal"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.email ? errors.email : ' '}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
            variant="outlined"
          />
          <label htmlFor="password">
            <Typography variant="overline">Password</Typography>
          </label>
          <TextField
            id="password"
            placeholder="Your password"
            fullWidth
            margin="normal"
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ' '}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
            variant="outlined"
          />
          <Box textAlign="center">
            <ModalButton>
              {isSubmitting ? <CircularProgress className={classes.circularProgess} /> : 'Login'}
            </ModalButton>
            <DemoButton />
          </Box>
        </form>
      )}
    </Formik>
  );
}
