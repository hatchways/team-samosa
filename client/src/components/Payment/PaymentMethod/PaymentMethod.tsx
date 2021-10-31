import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import PaymentMethodForm from '../PaymentMethodForm/PaymentMethodForm';
import useStyles from './useStyles';

export default function BookingContent(): JSX.Element {
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root} elevation={8}>
        <PaymentMethodForm />
      </Card>
    </Container>
  );
}
