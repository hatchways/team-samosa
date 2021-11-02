import { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

interface Props {
  title: string;
}

const ModalPaper: FunctionComponent<Props> = (props: React.PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} justify="center" alignItems="center">
      <Grid item className={classes.authWrapper} xs={12} sm={8} md={7} component={Paper} elevation={8}>
        <Box width="100%" maxWidth={450} p={3} alignSelf="center">
          <Grid container justify="center">
            <Grid item>
              <Typography className={classes.welcome} component="h1" variant="h5">
                {props.title}
              </Typography>
            </Grid>
          </Grid>
          {props.children}
        </Box>
        <Box p={1} alignSelf="center" />
      </Grid>
    </Grid>
  );
};

export default ModalPaper;
