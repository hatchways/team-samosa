import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: { margin: 0, maxWidth: '1536px', [theme.breakpoints.up('md')]: { margin: 48 } },
}));

export default useStyles;
