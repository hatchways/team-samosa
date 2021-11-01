import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    width: 160,
    height: 56,
  },
  circularProgess: { color: 'white' },
}));

export default useStyles;
