import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 19,
    font: 'Poppins',
    paddingLeft: '5px',
    paddingRight: '15px',
    display: 'inline-block',
    marginTop: '10px',
    fontWeight: 'bold',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#f04040',
    fontWeight: 'bold',
  },
}));

export default useStyles;
