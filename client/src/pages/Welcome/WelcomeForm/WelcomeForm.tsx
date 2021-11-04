import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import ModalButton from '../../../components/Modal/ModalButton/ModalButton';
import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login(): JSX.Element {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    history.push(`/profiles?search=${search}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">
        <Typography variant="overline">Where</Typography>
      </label>
      <TextField
        id="email"
        placeholder="Anywhere"
        fullWidth
        margin="normal"
        name="email"
        autoComplete="email"
        autoFocus
        variant="outlined"
        onChange={handleChange}
      />
      <Box textAlign="center">
        <ModalButton>Find my dog sitter</ModalButton>
      </Box>
    </form>
  );
}
