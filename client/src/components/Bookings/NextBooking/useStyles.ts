import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 32,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default useStyles;
