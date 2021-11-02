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
  const { userProfile } = useAuth();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} sm={6} md={5} elevation={0} component={Paper} square className={classes.back}>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <ProfileSelection name={'Edit profile'} link={'/profileEdition'} />
            <ProfileSelection name={'Profile photo'} link={'/profilephoto'} />
            <ProfileSelection name={'Availability'} link={'/profileEditionMock'} />
            <ProfileSelection name={'Payment'} link={'/profileEditionMock'} />
            <ProfileSelection name={'Security'} link={'/profileEditionMock'} />
            <ProfileSelection name={'Settings'} link={'/profileEditionMock'} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3} md={6} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={350} p={3} alignSelf="center">
            <Typography className={classes.welcome} component="h1" variant="h5">
              Profile Photo
            </Typography>
            <Avatar
              alt="Profile Image"
              src={
                userProfile && userProfile.photoUrl
                  ? `../../../Images/${userProfile.photoUrl.substring(72)}`
                  : `../../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png`
              }
              sx={{ width: 240, height: 240 }}
            />
            <Typography className={classes.desp} component="h1" variant="h5">
              Be sure to use a photo that clearly shows your face
            </Typography>
            <form onSubmit={handleSubmit(uploadPhoto)}>
              <Input {...register('picture')} type="file" name="picture" />
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
