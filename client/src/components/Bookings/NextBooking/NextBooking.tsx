import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import BookingsDate from '../BookingsDate/BookingsDate';
import BookingMoreMenu from '../BookingMoreMenu/BookingMoreMenu';
import { BookingRequest } from '../../../interface/Request';
import useStyles from './useStyles';

interface Props {
  request: BookingRequest | undefined;
}

export default function NextBooking({ request }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={8}>
      <Grid container direction="column" spacing={1}>
        {request ? (
          <>
            <Grid item container xs={12} justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="overline">Your next booking:</Typography>
              </Grid>
              <Grid item>
                <BookingMoreMenu request={request} size="medium" fontSize="default" />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container spacing={2}>
                  <Grid item>
                    <BookingsDate request={request} />
                  </Grid>
                  <Grid item container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar className={classes.avatar} alt="avatar" src="" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">{request.sitter.username}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography>{"You don't have any upcoming bookings"}</Typography>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
