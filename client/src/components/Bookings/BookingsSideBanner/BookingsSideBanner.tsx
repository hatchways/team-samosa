import Grid from '@material-ui/core/Grid';
import NextBooking from '../../../components/Bookings/NextBooking/NextBooking';
import BookingsPaper from '../BookingsPaper/BookingsPaper';
import useStyles from './useStyles';
import { BookingRequest } from '../../../interface/Request';

import { MOCK_TODAY } from '../mockRequests';

interface Props {
  requests: Array<BookingRequest>;
}

export default function BookingsSideBanner({ requests }: Props): JSX.Element {
  const nextBooking: BookingRequest | undefined = requests.find((element) => element.startDate > MOCK_TODAY);

  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3} className={classes.root}>
      <Grid item>
        <NextBooking request={nextBooking} />
      </Grid>
      <Grid item>{requests.length > 1 ? <BookingsPaper requests={requests} /> : ''}</Grid>
    </Grid>
  );
}
