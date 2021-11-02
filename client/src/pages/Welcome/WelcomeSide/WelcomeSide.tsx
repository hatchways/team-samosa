import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import WelcomeForm from '../WelcomeForm/WelcomeForm';

import useStyles from './useStyles';

export default function WelcomeSide(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.form} justify="center" alignItems="center">
      <Grid item className={classes.authWrapper} xs={12} sm={8} md={7}>
        <Box width="100%" maxWidth={450} p={3} alignSelf="center">
          <Grid container justify="center">
            <Grid item>
              <Typography className={classes.welcome} variant="h3">
                Find the care your dog deserves
              </Typography>
            </Grid>
          </Grid>
          <WelcomeForm />
        </Box>
        <Box p={1} alignSelf="center" />
      </Grid>
    </Grid>
  );
}
