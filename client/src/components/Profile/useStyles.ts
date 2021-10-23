import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: 19,
    font: 'Poppins',
    paddingLeft: '5px',
    paddingRight: '15px',
    display: 'inline-block',
    marginTop: '10px',
    fontWeight: 'bold',
  },
  inputs: {
    height: '2rem',
    padding: '5px',
  },
}));

export default useStyles;
