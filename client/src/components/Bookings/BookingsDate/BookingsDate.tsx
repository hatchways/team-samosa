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
      {format(request.startDate, 'd MMMM y ha') +
        ' - ' +
        (request.startDate.getDay() !== request.endDate.getDay() ? format(request.endDate, 'd MMMM y ') : '') +
        format(request.endDate, 'ha')}
    </Typography>
  );
}
