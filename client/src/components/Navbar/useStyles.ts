import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: { minHeight: 80 },
  logo: {
    flexGrow: 1,
  },
  logoText: {
    fontWeight: 800,
    letterSpacing: '-0.5px',
  },
  logoImg: {
    height: '35px',
    width: '35px',
    marginLeft: 16,
    marginRight: 30,
  },
  button: { marginRight: '0.5rem' },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default useStyles;
