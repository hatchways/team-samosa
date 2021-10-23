import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import BookingsSideBanner from '../../components/Bookings/BookingsSideBanner/BookingsSideBanner';
import BookingsCalendar from '../../components/Bookings/BookingsCalendar/BookingsCalendar';
import { getRequests } from '../../helpers/APICalls/getRequests';
import { useEffect, useState } from 'react';

import { BookingRequest } from '../../interface/Request';

const emptyRequests: Array<BookingRequest> = [];

export default function MySitters(): JSX.Element {
  const classes = useStyles();

  const [requests, setRequests] = useState(emptyRequests);

  useEffect(() => {
    getRequests().then((res) => {
      setRequests(res.requests);
    });
  }, []);

  return (
    <Grid className={classes.root} container direction="row-reverse" spacing={4}>
      <Grid xs={12} lg={7} item>
        <BookingsCalendar requests={requests} />
      </Grid>
      <Grid xs={12} lg={5} item>
        <BookingsSideBanner requests={requests} />
      </Grid>
    </Grid>
  );
}
