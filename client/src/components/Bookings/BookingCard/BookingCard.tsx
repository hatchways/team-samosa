import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Avatar } from '@material-ui/core';
import BookingsDate from '../BookingsDate/BookingsDate';
import BookingMoreMenu from '../BookingMoreMenu/BookingMoreMenu';
import { BookingRequest } from '../../../interface/Request';

import useStyles from './useStyles';

interface Props {
  request: BookingRequest;
}

export default function BookingContent({ request }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm container spacing={2}>
          <Grid item>
            <BookingsDate request={request} />
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="avatar" src="" />
            </Grid>
            <Grid item>
              <Typography variant="h6">{request.sitter.username}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="button" color="textSecondary">
            {request.status}
          </Typography>
        </Grid>
        <Grid className={classes.menu} item>
          <BookingMoreMenu request={request} size="small" fontSize="small" />
        </Grid>
      </Grid>
    </Card>
  );
}
