import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: { minHeight: '100vh', paddingTop: 80 },
  submit: {
    margin: theme.spacing(3, 2, 2),
    width: 160,
    height: 56,
  },
  star: { color: '#ffc527' },
}));

export default useStyles;
