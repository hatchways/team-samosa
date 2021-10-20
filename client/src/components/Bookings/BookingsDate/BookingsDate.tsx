import Typography from '@material-ui/core/Typography';
import { BookingRequest } from '../../../interface/Request';
import { MONTHS } from '../../../constants/date';

interface Props {
  classes: string;
  request: BookingRequest;
}

export default function BookingsDate({ classes, request }: Props): JSX.Element {
  return (
    <Typography className={classes}>{`${request.startDate.getDate()} ${
      MONTHS[request.startDate.getMonth()]
    } ${request.startDate.getFullYear()}, ${request.startDate.getHours()}-${request.endDate.getHours()}
                `}</Typography>
  );
}
