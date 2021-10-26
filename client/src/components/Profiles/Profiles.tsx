import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import ProfileRequest from './ProfileRequest/ProfileRequest';
import ProfileMain from './ProfileMain/ProfileMain';

export default function Profiles(): JSX.Element {
  const classes = useStyles();

  return (
    <Box p={3}>
      <Container>
        <Grid className={classes.root} container spacing={10} alignContent="center">
          <Grid item xs={12} md={7}>
            <ProfileMain />
          </Grid>
          <Grid item xs={12} md={5}>
            <ProfileRequest />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
