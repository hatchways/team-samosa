import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import createProfile from '../../helpers/APICalls/createProfile';
import updateProfile from '../../helpers/APICalls/updateProfile';
import EditProfile from './EditProfile/EditProfile';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Profile(): JSX.Element {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const handleSubmit = (
    {
      exist,
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      phoneNum,
      address,
      description,
    }: {
      exist: boolean;
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: Date;
      email: string;
      phoneNum: string;
      address: string;
      description: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      exist: boolean;
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: Date;
      email: string;
      phoneNum: string;
      address: string;
      description: string;
    }>,
  ) => {
    exist
      ? updateProfile(firstName, lastName, gender, birthDate, email, phoneNum, address, description).then((data) => {
          if (data.error) {
            console.error({ error: data.error });
            updateSnackBarMessage(data.error);
          } else {
            console.log(data);
          }
          setSubmitting(false);
        })
      : createProfile(firstName, lastName, gender, birthDate, email, phoneNum, address, description).then((data) => {
          if (data.error) {
            console.error({ error: data.error });
            updateSnackBarMessage(data.error);
          } else {
            console.log(data);
          }
          setSubmitting(false);
        });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <EditProfile handleSubmit={handleSubmit} />
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
