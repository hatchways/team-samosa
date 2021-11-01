import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProfileCard from './ProfileCard/ProfileCard';
import Container from '@material-ui/core/Container';
import { getProfiles } from '../../helpers/APICalls/getProfiles';

import { PublicProfileSuccess } from '../../interface/Profile';

const emptyProfiles: Array<PublicProfileSuccess> = [];

export default function ProfileListings(): JSX.Element {
  const [profiles, setProfiles] = useState(emptyProfiles);
  useEffect(() => {
    getProfiles().then((res) => {
      setProfiles(res.profiles);
    });
  }, []);
  return (
    <Box marginTop={16} p={3}>
      <Container>
        <Grid container spacing={10}>
          {profiles.map((element) => (
            <Grid key={element.id} item xs={12} md={6} lg={4}>
              <ProfileCard profile={element} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
