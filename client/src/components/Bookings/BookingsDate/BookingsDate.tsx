import Typography from '@material-ui/core/Typography';
import { BookingRequest } from '../../../interface/Request';
import { format } from 'date-fns';

interface Props {
  classes: string;
  request: BookingRequest;
}

export default function BookingsDate({ classes, request }: Props): JSX.Element {
  return (
    <Typography className={classes}>
      {format(request.startDate, 'd MMMM h') + ' - ' + format(request.endDate, 'h a')}
    </Typography>
  );
}
