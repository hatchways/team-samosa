import Typography from '@material-ui/core/Typography';
import { BookingRequest } from '../../../interface/Request';

interface Props {
  classes: string;
  request: BookingRequest;
}
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function BookingsDate({ classes, request }: Props): JSX.Element {
  return (
    <Typography className={classes}>{`${request.startDate.getDate()} ${
      MONTHS[request.startDate.getMonth()]
    } ${request.startDate.getFullYear()}, ${request.startDate.getHours()}-${request.endDate.getHours()}
                `}</Typography>
  );
}
