import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 32,
    borderRadius: 0,
    flexGrow: 1,
  },
  grid: {
    maxWidth: '1536px',
  },
  logo: {
    flexGrow: 1,
  },
  logoImg: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: '1.0rem',
  },
  logoText: {
    fontWeight: 800,
  },
  login: { marginRight: '0.5rem' },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default useStyles;
