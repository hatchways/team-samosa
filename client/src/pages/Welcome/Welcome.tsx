import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavBar from '../../components/Navbar/NavBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WelcomeSide from './WelcomeSide/WelcomeSide';

import useStyles from './useStyles';

export default function Welcome(): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <NavBar elevation={0} color="transparent" />
      <Grid container>
        <Grid item xs={12} md={6}>
          <WelcomeSide />
        </Grid>
        <Grid item xs={12} md={6} className={classes.dogItem}>
          <img className={classes.twodogs} src="/alvan-nee-T-0EW-SEbsE-unsplash.jpg" alt="Two dogs" />
        </Grid>
      </Grid>
    </>
  );
}
