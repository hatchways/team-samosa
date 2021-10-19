import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 32,
  },
  date: {
    fontSize: 18,
    fontWeight: 500,
  },
  user: {
    fontSize: 18,
    fontWeight: 700,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default useStyles;
