import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { PublicProfileSuccess } from '../../../interface/Profile';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

interface Props {
  profile: PublicProfileSuccess;
}

export default function ProfileCard({ profile }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Card elevation={8}>
      <Link href={`/profiles/${profile.userId}`} color="inherit" underline="none">
        <CardActionArea>
          <CardContent className={classes.content}>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Avatar className={classes.avatar} src={`/mock/${profile.photoUrl}`} />
              <Typography variant="h4">{`${profile.firstName} ${profile.lastName}`}</Typography>
              <Typography variant="h5">Loving pet sitter</Typography>
              <Grid item>
                <Box p={1}>
                  <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                </Box>
              </Grid>
              <Box maxWidth="300px">
                <Typography variant="body1" paragraph={true} align="center">
                  Dog sitting, cat sitting, pocket pet and bird care
                </Typography>
              </Box>
            </Grid>
          </CardContent>
        </CardActionArea>
        <Divider />
        <Box padding={3}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="center">
                <LocationOnIcon className={classes.location} fontSize="large" />
                <Typography variant="body1">Toronto, Ontario</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.rate} variant="body1">
                $14/hr
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Card>
  );
}
