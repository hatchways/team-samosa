import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BookingsSideBanner from '../../components/Bookings/BookingsSideBanner/BookingsSideBanner';
import BookingsCalendar from '../../components/Bookings/BookingsCalendar/BookingsCalendar';
import { getRequests } from '../../helpers/APICalls/getRequests';
import { useEffect, useState } from 'react';

import { BookingRequest } from '../../interface/Request';

const emptyRequests: Array<BookingRequest> = [];

const bookingType = 'owner';

export default function MySitters(): JSX.Element {
  const classes = useStyles();

  const [requests, setRequests] = useState(emptyRequests);

  useEffect(() => {
    getRequests(bookingType).then((res) => {
      setRequests(res.requests);
    });
  }, []);

  return (
    <>
      <Grid className={classes.root} container alignItems="center">
        <Grid item container direction="row-reverse" spacing={4} justify="center">
          <Grid xs={12} item>
            <Typography variant="h2">My Sitter Bookings</Typography>
          </Grid>
          <Grid xs={12} lg={7} item>
            <BookingsCalendar requests={requests} />
          </Grid>
          <Grid xs={12} lg={5} item>
            <BookingsSideBanner requests={requests} bookingType={bookingType} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
