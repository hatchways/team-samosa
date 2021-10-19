import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import BookingsSideBanner from '../../components/Bookings/BookingsSideBanner/BookingsSideBanner';
import BookingsCalendar from '../../components/Bookings/BookingsCalendar/BookingsCalendar';

// API response is being mocked until backend API is complete.
// MOCK_REQUESTS should be removed from the codebase and
// replaced with an API call
import { MOCK_REQUESTS } from '../../components/Bookings/mockRequests';

export default function MySitters(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid className={classes.root} item container spacing={10} direction="row-reverse">
        <Grid lg={7} item>
          <BookingsCalendar requests={MOCK_REQUESTS} />
        </Grid>
        <Grid lg={5} item>
          <BookingsSideBanner requests={MOCK_REQUESTS} />
        </Grid>
      </Grid>
    </Grid>
  );
}
