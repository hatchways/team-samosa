import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPublicProfile } from '../../helpers/APICalls/getPublicProfile';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import ProfileRequest from './ProfileRequest/ProfileRequest';
import ProfileMain from './ProfileMain/ProfileMain';
import { PublicProfileSuccess } from '../../interface/Profile';
import { useSnackBar } from '../../context/useSnackbarContext';

type ProfileParam = { profileId: string };

const EmptyProfile = {
  description: '',
  photoUrl: '',
  id: '',
  userId: '',
  firstName: '',
  lastName: '',
  address: '',
};

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  const history = useHistory();

  const { profileId } = useParams<ProfileParam>();

  const { updateSnackBarMessage } = useSnackBar();

  const [profile, setProfile] = useState<PublicProfileSuccess>(EmptyProfile);

  useEffect(() => {
    getPublicProfile(profileId).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
        history.push('/profiles');
      } else if (data.success) {
        setProfile(data.success);
      }
    });
  }, [profileId, updateSnackBarMessage, history]);

  return (
    <Container>
      <Grid className={classes.root} container spacing={10} alignContent="center">
        <Grid item xs={12} md={7}>
          <ProfileMain profile={profile} />
        </Grid>
        <Grid item xs={12} md={5}>
          <ProfileRequest profile={profile} />
        </Grid>
      </Grid>
    </Container>
  );
}
