import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import { ChangeEventHandler } from 'react';

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string | undefined;
  error: boolean | undefined;
  value: string;
  helperText: string | undefined;
  id: string | undefined;
  multiline: boolean | undefined;
};

const EditProfileInput: React.FC<Props> = ({ handleChange, label, error, value, helperText, id, multiline }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12} sm={3}>
        <Typography variant="body1" align="right">
          <label className={classes.label}>{label}</label>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id={id}
          margin="normal"
          InputProps={{
            classes: { input: classes.inputs },
          }}
          variant="outlined"
          multiline={multiline}
          name={id}
          autoComplete={id}
          autoFocus
          helperText={helperText}
          error={error}
          value={value}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};
export default EditProfileInput;
