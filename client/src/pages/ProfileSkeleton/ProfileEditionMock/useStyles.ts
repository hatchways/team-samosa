import { makeStyles } from '@material-ui/core/styles';
import { ArrowLeft } from '@material-ui/icons';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    marginTop: '2%',
    bbackgroundColor: '#000000',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 180,
    height: 54,
    fontSize: 20,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fafafa',
    color: 'grey',
    boxShadow: 'none',
    marginRight: 35,
    justifyContent: 'start',
  },
  accBtnselected: {
    width: 180,
    height: 54,
    fontSize: 20,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fafafa',
    color: '#000000',
    boxShadow: 'none',
    marginRight: 35,
    justifyContent: 'start',
  },
}));

export default useStyles;
