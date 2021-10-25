import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function ProfileEditionMock(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={6}
        sm={6}
        md={5}
        elevation={0}
        component={Paper}
        square
        style={{ color: 'white', backgroundColor: '#fafafa' }}
      >
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Link to={'/profileEditionMock'} className={classes.link}>
                  <Button color="inherit" className={classes.accBtnselected} variant="contained">
                    Edit profile
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link to={'/profileEditionMock'} className={classes.link}>
                  <Button color="inherit" className={classes.accBtn} variant="contained">
                    Profile photo
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link to={'/profileEditionMock'} className={classes.link}>
                  <Button color="inherit" className={classes.accBtn} variant="contained">
                    Availability
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link to={'/profileEditionMock'} className={classes.link}>
                  <Button color="inherit" className={classes.accBtn} variant="contained">
                    Payment
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link to={'/profileEditionMock'} className={classes.link}>
                  <Button color="inherit" className={classes.accBtn} variant="contained">
                    Security
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link to={'/profileEditionMock'} className={classes.link}>
                  <Button color="inherit" className={classes.accBtn} variant="contained">
                    Settings
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={6} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  This paper should be replaced with Actually page. Now is only a template!
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
