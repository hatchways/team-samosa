import NavBar from '../../components/Navbar/NavBar';
import Grid from '@material-ui/core/Grid';
import WelcomeSide from './WelcomeSide/WelcomeSide';
import WelcomeImg from '../../Images/two-happy-dogs.jpg';

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
          <img className={classes.welcomeImage} src={WelcomeImg} alt="Welcome image" />
        </Grid>
      </Grid>
    </>
  );
}
