import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  welcomeImage: { objectFit: 'cover', height: '100vh', width: '100%', overflow: 'hidden' },
  dogItem: { height: '100vh' },
}));

export default useStyles;
