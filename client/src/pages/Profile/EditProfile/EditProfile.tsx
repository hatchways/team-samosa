import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

interface Props {
  handleSubmit: (
    {
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      phoneNum,
      address,
      description,
    }: {
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: Date;
      email: string;
      phoneNum: string;
      address: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: Date;
      email: string;
      phoneNum: string;
      address: string;
      description: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        //SHould fetch data for future
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: new Date('1998-06-15'),
        email: '',
        phoneNum: '',
        address: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('FirstName is required'),
        lastName: Yup.string().required('LastName is required'),
        gender: Yup.string(),
        birthDate: Yup.date().default(function () {
          return new Date();
        }),
        email: Yup.string().required('email is required').email('email is not valid'),
        phoneNum: Yup.string().required('phone number is required'),
        address: Yup.string(),
        description: Yup.string(),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <label className={classes.label}>FIRST NAME </label>
          <TextField
            id="firstName"
            //fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
            }}
            style={{ width: '80%' }}
            variant="outlined"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            helperText={touched.firstName ? errors.firstName : ''}
            error={touched.firstName && Boolean(errors.firstName)}
            value={values.firstName}
            onChange={handleChange}
          />
          <label className={classes.label}>EMAIL ADDRESS </label>
          <TextField
            id="email"
            //fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
            }}
            style={{ width: '80%' }}
            variant="outlined"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
            </Button>
          </Box>
          <div style={{ height: 95 }} />
        </form>
      )}
    </Formik>
  );
}
