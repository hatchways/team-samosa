import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import { Profile } from '../../../interface/Profile';

interface Props {
  profile: Profile;
}

export default function ProfileCard({ profile }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Paper elevation={8}>
      <Box padding={6} justifySelf="center">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Avatar className={classes.avatar} src={`/mock/${profile.photoUrl}`} />
          <Typography variant="h4">{`${profile.firstName} ${profile.lastName}`}</Typography>
          <Typography variant="h5">Loving pet sitter</Typography>
          <Grid item>
            <Box p={1}>
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
            </Box>
          </Grid>

          <Box maxWidth="300px">
            <Typography variant="body1" paragraph={true} align="center">
              Dog sitting, cat sitting, pocket pet and bird care
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Divider />
      <Box padding={3}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
              <LocationOnIcon className={classes.location} fontSize="large" />
              <Typography variant="body1">{profile.address}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.rate} variant="body1">
              $14/hr
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
