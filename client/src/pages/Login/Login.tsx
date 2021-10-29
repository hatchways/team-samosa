import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Login(): JSX.Element {
  const classes = useStyles();

  const history = useHistory();

  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
        history.push('/dashboard');
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root} justify="center" alignItems="center">
      <Grid item className={classes.authWrapper} xs={12} sm={8} md={7} elevation={8} component={Paper} square>
        <Box width="100%" maxWidth={450} p={3} alignSelf="center">
          <Grid container justify="center">
            <Grid item>
              <Typography className={classes.welcome} component="h1" variant="h5">
                Welcome back!
              </Typography>
            </Grid>
          </Grid>
          <LoginForm handleSubmit={handleSubmit} />
        </Box>
        <Box p={1} alignSelf="center" />
      </Grid>
    </Grid>
  );
}
