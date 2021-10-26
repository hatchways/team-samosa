import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: { marginRight: '0.5rem' },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default useStyles;
