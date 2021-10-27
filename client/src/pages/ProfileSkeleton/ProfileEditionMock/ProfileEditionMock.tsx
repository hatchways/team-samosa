import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import ProfileSelection from '../../../components/ProfileSelection/ProfileSelection';

export default function ProfileEditionMock(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} sm={6} md={5} elevation={0} component={Paper} square className={classes.back}>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <ProfileSelection name={'Edit profile'} link={'/profileEditionMock'} selected={true} />
            <ProfileSelection name={'Profile photo'} link={'/profileEditionMock'} selected={false} />
            <ProfileSelection name={'Availability'} link={'/profileEditionMock'} selected={false} />
            <ProfileSelection name={'Payment'} link={'/profileEditionMock'} selected={false} />
            <ProfileSelection name={'Security'} link={'/profileEditionMock'} selected={false} />
            <ProfileSelection name={'Settings'} link={'/profileEditionMock'} selected={false} />
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={6} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  This paper should be replaced with Actually page. Now is only a template!
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
