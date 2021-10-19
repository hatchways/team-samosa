import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: 18,
  },
  date: {
    fontSize: 16,
    fontWeight: 500,
  },
  user: {
    fontSize: 16,
    fontWeight: 700,
  },
  status: {
    fontWeight: 700,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  menu: {
    alignSelf: 'flex-start',
  },
}));

export default useStyles;
