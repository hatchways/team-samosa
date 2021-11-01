import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toolbar: { minHeight: 80 },
  logo: {
    flexGrow: 1,
  },
  logoText: {
    letterSpacing: '-0.5px',
    fontWeight: 800,
  },
  logoTextLink: { color: 'inherit', textDecoration: 'none' },
  logoImg: {
    height: '35px',
    width: '35px',
    marginLeft: 16,
    marginRight: 30,
  },
  button: { marginRight: '0.5rem' },
}));

export default useStyles;
