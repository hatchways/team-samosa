import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import ProfileSelection from '../../../components/ProfileSelection/ProfileSelection';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../../context/useAuthContext';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Input from '@mui/material/Input';
import uploadPhoto from '../../../helpers/APICalls/uploadPhoto';

export default function ProfilePhoto(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const { userProfile, loggedInUser } = useAuth();
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
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={960} sx={{ pl: 16 }} alignSelf="center">
            <Typography className={classes.welcome} component="h1" variant="h5">
              Profile Photo
            </Typography>
            <Avatar
              alt="Profile Image"
              src={userProfile && userProfile.photoUrl ? userProfile.photoUrl : loggedInUser?.username}
              sx={{ width: 240, height: 240, ml: 16 }}
            />
            <Typography className={classes.desp} component="h1" variant="h5">
              Be sure to use a photo that clearly shows your face
            </Typography>
            <form onSubmit={handleSubmit(uploadPhoto)}>
              <Input {...register('picture')} type="file" name="picture" className={classes.input} />
              <Button type="submit" size="large" variant="outlined" color="primary" className={classes.submit}>
                {false ? <CircularProgress style={{ color: 'white' }} /> : 'Upload a photo from your device'}
              </Button>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
