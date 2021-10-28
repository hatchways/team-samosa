import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';

export default function ProfileCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Paper elevation={8}>
      <Box padding={6} justifySelf="center">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Avatar className={classes.avatar} src="/mock/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" />
          <Typography variant="h4">Norma Byers</Typography>
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
      </Box>
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
    </Paper>
  );
}
