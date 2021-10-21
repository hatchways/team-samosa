import Typography from '@material-ui/core/Typography';
import { BookingRequest } from '../../../interface/Request';
import { format } from 'date-fns';

interface Props {
  request: BookingRequest;
}

export default function BookingsDate({ request }: Props): JSX.Element {
  return (
    <Typography variant="h6">
      {format(request.startDate, 'd MMMM h') + ' - ' + format(request.endDate, 'h a')}
    </Typography>
  );
}
