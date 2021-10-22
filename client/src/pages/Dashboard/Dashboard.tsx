import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';

import MySitters from '../MySitters/MySitters';

import { useEffect } from 'react';

export default function Dashboard(): JSX.Element {
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
      <CssBaseline />
      <PageWrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard/mysitters">
              <MySitters />
            </Route>
            <Route path="/dashboard/myjobs">{/* <MyJobs /> */}</Route>
            <Route path="/dashboard/myprofile">{/* <MyProfile /> */}</Route>
            <Route path="*">
              <Redirect to="/dashboard/mysitters" />
            </Route>
          </Switch>
        </BrowserRouter>
      </PageWrapper>
    </Grid>
  );
}
