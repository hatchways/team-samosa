import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProfileCard from './ProfileCard/ProfileCard';
import Container from '@material-ui/core/Container';

export default function ProfileListings(): JSX.Element {
  return (
    <Box marginTop={16} p={3}>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
