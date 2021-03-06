import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  root: { minHeight: '100vh', paddingTop: 80 },
  image: { objectFit: 'cover', borderRadius: 5 },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderWidth: 6,
    borderColor: 'white',
    borderStyle: 'solid',
  },
  avatarBorder: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: theme.spacing(-10),
    borderRadius: theme.spacing(12),
  },
  dog: { borderRadius: 5 },
  location: { color: theme.palette.primary.main, marginRight: 6 },
}));

export default useStyles;
