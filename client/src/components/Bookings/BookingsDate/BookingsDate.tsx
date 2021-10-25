import Typography from '@material-ui/core/Typography';
import { BookingRequest } from '../../../interface/Request';
import { format } from 'date-fns';

interface Props {
  request: BookingRequest;
}

export default function BookingsDate({ request }: Props): JSX.Element {
  return (
    <Typography variant="h6">
      {format(request.startDate, 'd MMMM y ha') +
        ' - ' +
        (request.startDate.getDay() !== request.endDate.getDay() && format(request.endDate, 'd MMMM y ')) +
        format(request.endDate, 'ha')}
    </Typography>
  );
}
