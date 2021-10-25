import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import {
  startOfWeek,
  startOfMonth,
  addDays,
  addMonths,
  format,
  areIntervalsOverlapping,
  startOfDay,
  endOfDay,
} from 'date-fns';
import useStyles from './useStyles';
import React, { useState } from 'react';
import { BookingRequest } from '../../../interface/Request';
import { MOCK_TODAY } from '../mockRequests';

interface Props {
  requests: Array<BookingRequest>;
}

export default function BookingsCalendar({ requests }: Props): JSX.Element {
  const classes = useStyles();

  const [month, setMonth] = useState(MOCK_TODAY);

  const firstWeekDay = startOfWeek(startOfMonth(month));

  function DayItem(day: number) {
    const dayDate = addDays(firstWeekDay, day);

    const isDayBooked = requests.some(
      (element) =>
        areIntervalsOverlapping(
          { start: element.startDate, end: element.endDate },
          { start: startOfDay(dayDate), end: endOfDay(dayDate) },
        ) && dayDate > MOCK_TODAY,
    );
    const isDayThisMonth = month.getMonth() === dayDate.getMonth();

    const dayBookedColor = isDayBooked ? classes.bookedDay : classes.notBookedDay;

    const otherMonthColor = !isDayThisMonth ? classes.otherMonth : '';

    return (
      <React.Fragment>
        <Grid item>
          <Avatar className={`${dayBookedColor} ${otherMonthColor}`}>{dayDate.getDate()}</Avatar>
        </Grid>
      </React.Fragment>
    );
  }

  function WeekRow(row: number) {
    return <React.Fragment>{[0, 1, 2, 3, 4, 5, 6].map((element) => DayItem(element + row * 7))}</React.Fragment>;
  }

  function handleIncButton() {
    setMonth(addMonths(month, 1));
  }
  function handleDecButton() {
    setMonth(addMonths(month, -1));
  }

  return (
    <Paper className={classes.root} elevation={8}>
      <Grid container spacing={6}>
        <Grid item container justify="space-between" alignItems="center">
          <Grid item className={classes.incdec}>
            <IconButton onClick={handleDecButton} edge="start">
              <NavigateBeforeIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.month}>
            <Typography variant="h5">{format(month, 'MMMM y')}</Typography>
          </Grid>
          <Grid item className={classes.incdec}>
            <IconButton onClick={handleIncButton} edge="end">
              <NavigateNextIcon />
            </IconButton>
          </Grid>
        </Grid>
        {[0, 1, 2, 3, 4].map((element, index) => (
          <Grid item key={index} container xs={12} justify="space-between">
            {WeekRow(element)}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
