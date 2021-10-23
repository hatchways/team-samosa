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
import { ProfileData, ProfileSuccess } from '../../../interface/Profile';
import { useEffect, useState } from 'react';
import { getProfile } from '../../../helpers/APICalls/getProfile';
interface Props {
  handleSubmit: (
    { exist, firstName, lastName, gender, birthDate, email, phoneNum, address, description }: ProfileSuccess,
    { setStatus, setSubmitting }: FormikHelpers<ProfileSuccess>,
  ) => void;
}

const profileclear: ProfileData = {};
export default function EditProfile({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();
  const [profile, setProfile] = useState(profileclear);
  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res);
    });
  }, []);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        exist: profile.success ? true : false,
        firstName: profile.success ? profile.success.firstName : '',
        lastName: profile.success ? profile.success.lastName : '',
        gender: profile.success ? profile.success.gender : '',
        birthDate: profile.success ? profile.success.birthDate : new Date('1998-06-15'),
        email: profile.success ? profile.success.email : '',
        phoneNum: profile.success ? profile.success.phoneNum : '',
        address: profile.success ? profile.success.address : '',
        description: profile.success ? profile.success.description : '',
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
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
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
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
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
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
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
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
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
                margin="normal"
                InputProps={{
                  classes: { input: classes.inputs },
                }}
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
          <Box style={{ height: 95 }} />
        </form>
      )}
    </Formik>
  );
}
