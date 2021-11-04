import Button from '@material-ui/core/Button';
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
import { ProfileSuccess } from '../../../interface/Profile';
import EditProfileInput from '../../../components/Profile/EditProfileInput';
import { useAuth } from '../../../context/useAuthContext';
interface Props {
  handleSubmit: (
    { exist, firstName, lastName, gender, birthDate, email, phoneNum, address, description }: ProfileSuccess,
    { setStatus, setSubmitting }: FormikHelpers<ProfileSuccess>,
  ) => void;
}

export default function EditProfile({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();
  const { userProfile } = useAuth();
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        exist: !userProfile ? false : true,
        firstName: !userProfile ? '' : userProfile.firstName,
        lastName: !userProfile ? '' : userProfile.lastName,
        gender: !userProfile ? '' : userProfile.gender,
        birthDate: !userProfile ? new Date('1998-06-15') : userProfile.birthDate,
        email: !userProfile ? '' : userProfile.email,
        phoneNum: !userProfile ? '' : userProfile.phoneNum,
        address: !userProfile ? '' : userProfile.address,
        description: !userProfile ? '' : userProfile.description,
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
          <EditProfileInput
            handleChange={handleChange}
            id={'firstName'}
            label={'First name'}
            helperText={touched.firstName ? errors.firstName : ''}
            error={touched.firstName && Boolean(errors.firstName)}
            value={values.firstName}
            multiline={false}
          />
          <EditProfileInput
            handleChange={handleChange}
            id={'lastName'}
            label={'Last name'}
            helperText={touched.lastName ? errors.lastName : ''}
            error={touched.lastName && Boolean(errors.lastName)}
            value={values.lastName}
            multiline={false}
          />
          <EditProfileInput
            handleChange={handleChange}
            id={'gender'}
            label={'Gender'}
            helperText={touched.gender ? errors.gender : ''}
            error={touched.gender && Boolean(errors.gender)}
            value={values.gender || ''}
            multiline={false}
          />
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="right">
                <label className={classes.label}>Birth date </label>
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
          <EditProfileInput
            handleChange={handleChange}
            id={'email'}
            label={'Email address'}
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email || ''}
            multiline={false}
          />
          <EditProfileInput
            handleChange={handleChange}
            id={'phoneNum'}
            label={'Phone number'}
            helperText={touched.phoneNum ? errors.phoneNum : ''}
            error={touched.phoneNum && Boolean(errors.phoneNum)}
            value={values.phoneNum || ''}
            multiline={false}
          />
          <EditProfileInput
            handleChange={handleChange}
            id={'address'}
            label={'Where are you live'}
            helperText={touched.address ? errors.address : ''}
            error={touched.address && Boolean(errors.address)}
            value={values.address || ''}
            multiline={true}
          />
          <EditProfileInput
            handleChange={handleChange}
            id={'description'}
            label={'Describe yourself'}
            helperText={touched.description ? errors.description : ''}
            error={touched.description && Boolean(errors.description)}
            value={values.description}
            multiline={true}
          />
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
