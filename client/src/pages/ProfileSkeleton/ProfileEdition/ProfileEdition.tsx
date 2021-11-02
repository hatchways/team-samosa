import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import ProfileSelection from '../../../components/ProfileSelection/ProfileSelection';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { useAuth } from '../../../context/useAuthContext';
import { FormikHelpers } from 'formik';
import { ProfileSuccess } from '../../../interface/Profile';
import updateProfile from '../../../helpers/APICalls/updateProfile';
import { getUProfile } from '../../../helpers/APICalls/getUProfile';
import createProfile from '../../../helpers/APICalls/createProfile';
import EditProfile from './EditProfile/EditProfile';

export default function ProfileEdition(): JSX.Element {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const { updateProfileContext } = useAuth();
  const handleSubmit = (
    { exist, firstName, lastName, gender, birthDate, email, phoneNum, address, description }: ProfileSuccess,
    { setSubmitting }: FormikHelpers<ProfileSuccess>,
  ) => {
    exist
      ? updateProfile(firstName, lastName, gender, birthDate, email, phoneNum, address, description).then((data) => {
          if (data.error) {
            updateSnackBarMessage(data.error.message);
          } else {
            getUProfile().then((res) => {
              if (res.success) {
                updateProfileContext(res.success);
              }
            });
            updateSnackBarMessage('Profile was successfully Updated');
          }
          setSubmitting(false);
        })
      : createProfile(firstName, lastName, gender, birthDate, email, phoneNum, address, description).then((data) => {
          if (data.error) {
            updateSnackBarMessage(data.error.message);
          } else {
            getUProfile().then((res) => {
              if (res.success) {
                updateProfileContext(res.success);
              }
            });
            updateSnackBarMessage('Profile was successfully created');
          }
          setSubmitting(false);
        });
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} sm={3} md={3} elevation={0} component={Paper} square className={classes.back}>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <ProfileSelection name={'Edit profile'} link={'/dashboard/my-profile/profile-edition'} />
            <ProfileSelection name={'Profile photo'} link={'/dashboard/my-profile/profile-photo'} />
            <ProfileSelection name={'Availability'} link={'/dashboard/my-profile/profile-edition'} />
            <ProfileSelection name={'Payment'} link={'/dashboard/my-profile/profile-edition'} />
            <ProfileSelection name={'Security'} link={'/dashboard/my-profile/profile-edition'} />
            <ProfileSelection name={'Settings'} link={'/dashboard/my-profile/profile-edition'} />
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={960} sx={{ pl: 16 }} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <EditProfile handleSubmit={handleSubmit} />
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
