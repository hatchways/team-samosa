import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function ProfileMain(): JSX.Element {
  const classes = useStyles();

  return (
    <Paper elevation={8}>
      <Typography variant="h3">Norma Byers</Typography>
      <Typography variant="h5">Loving pet sitter</Typography>
      <Typography>Toronto, Ontario</Typography>
      <Typography variant="h4">About me</Typography>
      <Typography variant="body1">
        Animals are my passion! I will look after your pets with loving care. I have some availability for pet care in
        my home as well. I have 10 yrs of experience at the Animal Hospital, and have owned multiple pets for many
        years, including numerous rescues. Kindly email, text or call me and I will respond promptly!
      </Typography>
    </Paper>
  );
}
