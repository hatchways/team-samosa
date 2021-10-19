import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: 32,
    minHeight: '100px',
  },
  title: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  empty: { fontSize: 16 },
}));

export default useStyles;
