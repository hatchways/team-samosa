import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileEdition from './ProfileEdition/ProfileEdition';

import { useEffect } from 'react';
export default function Profile(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);
  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <Grid container component="main">
      <Container>
        <Switch>
          <Route path="/dashboard/my-profile/profile-photo">
            <ProfilePhoto />
          </Route>
          <Route path="/dashboard/my-profile/profile-edition">
            <ProfileEdition />
          </Route>
          <Route path="*">
            <Redirect to="/dashboard/my-profile/profile-edition" />
          </Route>
        </Switch>
      </Container>
    </Grid>
  );
}
