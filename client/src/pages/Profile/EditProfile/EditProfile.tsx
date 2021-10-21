import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { TextField as Text } from '@mui/material';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
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
        birthDate: Yup.date().nullable(),
        email: Yup.string().required('email is required').email('email is not valid'),
        phoneNum: Yup.string().required('phone number is required'),
        address: Yup.string(),
        description: Yup.string(),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, setFieldValue }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>FIRST NAME</label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
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
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>LAST NAME</label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="lastName"
                //fullWidth
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                style={{ width: '80%' }}
                variant="outlined"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                value={values.lastName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>GENDER </label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="gender"
                //fullWidth
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                style={{ width: '40%' }}
                variant="outlined"
                name="gender"
                autoComplete="gender"
                autoFocus
                helperText={touched.gender ? errors.gender : ''}
                error={touched.gender && Boolean(errors.gender)}
                value={values.gender}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>BIRTH DATE </label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={values.birthDate}
                  onChange={(val) => setFieldValue('birthDate', val)}
                  renderInput={(params) => <Text {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>EMAIL ADDRESS </label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
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
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>PHONE NUMBER </label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="phoneNum"
                //fullWidth
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                style={{ width: '80%' }}
                variant="outlined"
                name="phoneNum"
                autoComplete="phoneNum"
                autoFocus
                helperText={touched.phoneNum ? errors.phoneNum : ''}
                error={touched.phoneNum && Boolean(errors.phoneNum)}
                value={values.phoneNum}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>WHERE YOUR LIVE </label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="address"
                multiline
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                style={{ width: '80%' }}
                variant="outlined"
                name="address"
                autoComplete="address"
                autoFocus
                helperText={touched.address ? errors.address : ''}
                error={touched.email && Boolean(errors.address)}
                value={values.address}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>DESCRIBE YOURSELF </label>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="description"
                multiline
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                style={{ width: '80%' }}
                variant="outlined"
                name="description"
                autoComplete="description"
                autoFocus
                helperText={touched.description ? errors.description : ''}
                error={touched.email && Boolean(errors.description)}
                value={values.description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
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
