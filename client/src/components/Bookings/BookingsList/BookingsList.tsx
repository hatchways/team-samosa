import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BookingCard from '../BookingCard/BookingCard';
import { BookingRequest } from '../../../interface/Request';

interface Props {
  title: string;
  requests: Array<BookingRequest>;
}

export default function BookingsList({ title, requests }: Props): JSX.Element {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="overline">{title}</Typography>
      </Grid>
      <Grid item container spacing={1}>
        {requests.map((element, index) => (
          <Grid xs={12} key={index} item>
            <BookingCard request={element} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
