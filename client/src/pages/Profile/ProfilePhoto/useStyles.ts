import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    marginTop: '10%',
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
    fontFamily: theme.typography.body2.fontFamily,
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
    padding: 10,
    width: 315,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    marginLeft: 100,
    fontSize: 16,
    color: '#f04040',
    fontWeight: 'bold',
  },
  input: {
    marginLeft: 100,
    paddingLeft: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
