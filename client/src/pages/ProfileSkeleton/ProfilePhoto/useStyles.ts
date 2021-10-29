import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '0.8px solid rgba(0, 0, 0, 0.2)',
    },
    marginTop: '5%',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 35,
  },
  back: {
    backgroundColor: '#fafafa',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
  desp: {
    fontSize: 20,
    paddingBottom: 20,
    color: 'grey',
    fontWeight: 500,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
    paddingTop: 10,
  },
  submit: {
    //margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 315,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    color: '#f04040',
    fontWeight: 'bold',
  },
}));

export default useStyles;
