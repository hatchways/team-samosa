import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import DemoButton from '../../../components/DemoButton/DemoButton';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Name is required').max(40, 'Name is too long'),
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
          <label htmlFor="username">
            <Typography variant="overline">Name</Typography>
          </label>
          <TextField
            id="username"
            placeholder="Your name"
            fullWidth
            margin="normal"
            name="username"
            autoComplete="username"
            autoFocus
            helperText={touched.username ? errors.username : ' '}
            error={touched.username && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
            variant="outlined"
          />
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
            placeholder="Create a password"
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
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress className={classes.circularProgess} /> : 'Sign up'}
            </Button>
            <DemoButton />
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
