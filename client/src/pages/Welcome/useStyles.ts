import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: { width: '100vw', height: '100vh' },
  twodogs: { objectFit: 'cover', height: '100vh', width: '100%', overflow: 'hidden' },
  dogItem: { height: '100vh' },
  form: {
    minHeight: '100vh',
    paddingTop: 80,
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 23,
    maxWidth: '600px',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
  },
}));

export default useStyles;
