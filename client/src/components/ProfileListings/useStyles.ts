import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    width: '400px',
  },
  heading: { marginBottom: 16 },
  location: { color: theme.palette.primary.main },
}));

export default useStyles;
