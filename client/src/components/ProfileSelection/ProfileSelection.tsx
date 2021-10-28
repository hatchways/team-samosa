import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ChatSideBanner = (props: { name: string; link: string; selected: boolean }): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs>
        <Button
          component={Link}
          to={props.link}
          color="inherit"
          className={props.selected ? classes.accBtnselected : classes.accBtn}
          variant="contained"
        >
          {props.name}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ChatSideBanner;
