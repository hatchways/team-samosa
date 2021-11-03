import { useEffect, useState, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProfileCard from './ProfileCard/ProfileCard';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { getProfiles } from '../../helpers/APICalls/getProfiles';
import useStyles from './useStyles';
import { useDebounce } from 'use-debounce';
import { PublicProfileSuccess } from '../../interface/Profile';
import { useSnackBar } from '../../context/useSnackbarContext';

const emptyProfiles: Array<PublicProfileSuccess> = [];

export default function ProfileListings(): JSX.Element {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  const [profiles, setProfiles] = useState(emptyProfiles);
  const [search, setSearchTerm] = useState('');

  const [debouncedSearch] = useDebounce(search, 500);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    (async function () {
      const data = await getProfiles(debouncedSearch);
      if (data.success) {
        setProfiles(data.success.profiles);
      } else if (data.error) {
        updateSnackBarMessage(data.error.message);
      }
    })();
  }, [debouncedSearch, updateSnackBarMessage]);
  return (
    <Box marginTop={16} p={3}>
      <Container>
        <Grid container className={classes.heading} direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h2">Your search results</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.search}
              id="location"
              placeholder="Location"
              fullWidth
              margin="normal"
              name="email"
              autoComplete="email"
              autoFocus
              value={search}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
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
