import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BookingCard from '../BookingCard/BookingCard';
import { BookingRequest } from '../../../interface/Request';

interface Props {
  title: string;
  requests: Array<BookingRequest>;
  bookingType: 'sitter' | 'owner';
}

export default function BookingsList({ title, requests, bookingType }: Props): JSX.Element {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="overline">{title}</Typography>
      </Grid>
      <Grid item container spacing={1}>
        {requests.map((element, index) => (
          <Grid xs={12} key={index} item>
            <BookingCard request={element} bookingType={bookingType} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
