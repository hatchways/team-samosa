import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import ModalButton from '../../Modal/ModalButton/ModalButton';
import { createRequest } from '../../../helpers/APICalls/createRequest';
import { useSnackBar } from '../../../context/useSnackbarContext';

import { PublicProfileSuccess } from '../../../interface/Profile';

interface Props {
  profile: PublicProfileSuccess;
}

export default function ProfileRequest({ profile }: Props): JSX.Element {
  const history = useHistory();
  const { updateSnackBarMessage } = useSnackBar();

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(new Date());

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (selectedStartDate && selectedEndDate && profile?.userId) {
      const data = await createRequest(profile?.userId, selectedStartDate, selectedEndDate);
      if (data.success) {
        updateSnackBarMessage('You have made a sucessful booking request');
        history.push('/dashboard');
      } else if (data.error) {
        console.error(data.error);
        if (data.error.status === 401) {
          updateSnackBarMessage('Please log in to make a booking request');
        }
      } else {
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    }
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
            <form onSubmit={handleSubmit}>
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
                  value={selectedStartDate}
                  InputAdornmentProps={{ position: 'start' }}
                  onChange={handleStartDateChange}
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
                  value={selectedEndDate}
                  InputAdornmentProps={{ position: 'start' }}
                  onChange={handleEndDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              <Box textAlign="center">
                <ModalButton>Send Request</ModalButton>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
