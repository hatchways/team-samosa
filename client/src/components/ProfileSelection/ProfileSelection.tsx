import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SidebarLink = (props: { name: string; link: string }): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs>
        <Button
          component={NavLink}
          to={props.link}
          color="inherit"
          className={classes.accBtn}
          activeClassName={classes.accBtnselected}
          variant="contained"
        >
          {props.name}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SidebarLink;
