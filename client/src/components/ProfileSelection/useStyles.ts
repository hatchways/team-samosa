import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accBtn: {
    width: 180,
    height: 54,
    fontSize: 20,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fafafa',
    color: 'grey',
    boxShadow: 'none',
    marginRight: 35,
    justifyContent: 'start',
  },
  accBtnselected: {
    width: 180,
    height: 54,
    fontSize: 20,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fafafa',
    color: '#000000',
    boxShadow: 'none',
    marginRight: 35,
    justifyContent: 'start',
  },
}));

export default useStyles;
