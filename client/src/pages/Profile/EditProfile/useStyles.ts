import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    align: 'left',
    display: 'table',
  },
  label: {
    fontSize: 19,
    font: 'Poppins',
    paddingLeft: '5px',
    paddingRight: '15px',
    align: 'left',
    display: 'inline-block',
    marginTop: '25px',
  },
  inputs: {
    marginTop: '.8rem',
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
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
