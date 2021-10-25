import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { BookingRequest } from '../../../interface/Request';
import BookingsList from '../BookingsList/BookingsList';

import useStyles from './useStyles';

import { MOCK_TODAY } from '../mockRequests';

interface Props {
  requests: Array<BookingRequest>;
}

export default function BookingsPaper({ requests }: Props): JSX.Element {
  const classes = useStyles();
  const pastBookings = requests.filter((element) => element.startDate < MOCK_TODAY);
  const currentBookings = requests.filter((element) => element.startDate > MOCK_TODAY).slice(1);

  return (
    <Paper className={classes.root} elevation={8}>
      <Grid container spacing={3}>
        {currentBookings.length ? (
          <Grid item xs={12}>
            <BookingsList title="Current Bookings:" requests={currentBookings} />
          </Grid>
        ) : (
          ''
        )}
        {pastBookings.length ? (
          <Grid item xs={12}>
            <BookingsList title="Past Bookings:" requests={pastBookings} />
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </Paper>
  );
}
