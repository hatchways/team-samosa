import NavBar from '../../components/Navbar/NavBar';
import Grid from '@material-ui/core/Grid';
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
