import { makeStyles } from '@material-ui/core/styles';

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
  back: {
    color: 'white',
    backgroundColor: '#fafafa',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
}));

export default useStyles;
