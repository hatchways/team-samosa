import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';

import { Profile } from '../../../interface/Profile';

interface Props {
  profile?: Profile;
}

export default function ProfileRequest({ profile }: Props): JSX.Element {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Paper elevation={8}>
      <Grid container justify="center">
        <Grid item>
          <Box p={6} maxWidth={350}>
            <Grid container alignItems="center" direction="column" spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5">$14/hr</Typography>
              </Grid>
              <Grid item>
                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
              </Grid>
            </Grid>
            <form>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <label htmlFor="date-picker-dropin">
                  <Typography variant="overline">Drop in</Typography>
                </label>
                <KeyboardDateTimePicker
                  variant="inline"
                  inputVariant="outlined"
                  format="d MMMM yyyy  h:mm a"
                  margin="normal"
                  id="date-picker-dropin"
                  value={selectedDate}
                  InputAdornmentProps={{ position: 'start' }}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <label htmlFor="drop out">
                  <Typography variant="overline">Drop out</Typography>
                </label>
                <KeyboardDateTimePicker
                  variant="inline"
                  inputVariant="outlined"
                  format="d MMMM yyyy  h:mm a"
                  margin="normal"
                  id="date-picker-dropout"
                  value={selectedDate}
                  InputAdornmentProps={{ position: 'start' }}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </form>
            <Box textAlign="center">
              <Button className={classes.submit} color="primary" variant="contained" size="large">
                Send Request
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
