import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function ProfileMain(): JSX.Element {
  const classes = useStyles();

  return (
    <Paper elevation={8}>
      <img className={classes.image} src="/mock/david-veksler-VW5YwCYbPyk-unsplash.jpg" width="100%" height="300px" />
      <Grid container direction="column" alignItems="center">
        <Paper className={classes.avatarBorder} elevation={8}>
          <Avatar className={classes.avatar} src="/mock/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" />
        </Paper>

        <Typography variant="h3">Norma Byers</Typography>
        <Typography variant="h5">Loving pet sitter</Typography>
        <Box paddingTop={3}>
          <Grid item container justify="center" alignItems="center">
            <LocationOnIcon className={classes.location} fontSize="large" />
            <Typography>Toronto, Ontario</Typography>
          </Grid>
        </Box>
      </Grid>
      <Box padding={6} paddingTop={3}>
        <Typography variant="h4" gutterBottom>
          About me
        </Typography>
        <Typography variant="body1" gutterBottom paragraph={true}>
          Animals are my passion! I will look after your pets with loving care. I have some availability for pet care in
          my home as well. I have 10 yrs of experience at the Animal Hospital, and have owned multiple pets for many
          years, including numerous rescues. Kindly email, text or call me and I will respond promptly!
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar className={classes.dog} src="/mock/charles-deluvio-K4mSJ7kc0As-unsplash.jpg" />
          </Grid>
          <Grid item>
            <Avatar className={classes.dog} src="/mock/ja-san-miguel-_-QQuvAwQ-0-unsplash.jpg" />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
