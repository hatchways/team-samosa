import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import Profile from '../Profile/Profile';
import ProfilePhoto from '../ProfileSkeleton/ProfilePhoto/ProfilePhoto';
import { getProfile } from '../../helpers/APICalls/getProfile';
import { useSnackBar } from '../../context/useSnackbarContext';

import MySitters from '../MySitters/MySitters';
import MyJobs from '../MyJobs/MyJobs';

import { useEffect, useState } from 'react';
export default function Dashboard(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const { initSocket } = useSocket();
  const history = useHistory();
  const [isSitter, setIsSitter] = useState<boolean | undefined>(false);

  useEffect(() => {
    (async function () {
      const data = await getProfile();
      if (data.error) {
        await updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        await setIsSitter(data.success.profile.isSitter);
      }
    })();
  }, [updateSnackBarMessage]);

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
          <Route path="/dashboard/my-sitters">
            <MySitters />
          </Route>
          {isSitter && (
            <Route path="/dashboard/my-jobs">
              <MyJobs />
            </Route>
          )}
          <Route path="/dashboard/my-profile">
            <ProfilePhoto />
          </Route>
          <Route path="*">
            <Redirect to="/dashboard/my-sitters" />
          </Route>
        </Switch>
      </Container>
    </Grid>
  );
}
