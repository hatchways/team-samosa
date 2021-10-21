import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 64,
  },
  month: {
    color: theme.palette.primary.main,
  },
  incdec: {
    fontSize: 20,
  },
  bookedDay: {
    fontSize: 14,
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,
  },
  notBookedDay: {
    fontSize: 14,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  otherMonth: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
