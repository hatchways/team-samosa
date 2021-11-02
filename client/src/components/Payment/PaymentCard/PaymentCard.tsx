import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './useStyles';

interface Props {
  card: { brand: string; exp_month: string; exp_year: string; last4: string; name: string };
}

export default function PaymentCard({ card }: Props): JSX.Element {
  const classes = useStyles();
  const cardIcon = () => {
    switch (card.brand) {
      case 'visa':
        return '/payment-icons/flat-rounded/visa.svg';
    }
  };
  return (
    <Button variant="outlined">
      <Grid container className={classes.grid} spacing={2} alignItems="flex-start" direction="column">
        <Grid item>
          <img src={cardIcon()} className={classes.cardIcon} />
        </Grid>
        <Grid item container alignItems="flex-start" direction="column">
          <Grid item>•••• •••• •••• {card.last4}</Grid>
          <Grid item>
            <Typography variant="body2">
              Exp. Date {card.exp_month}/{card.exp_year}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>{card.name || 'John Doe'}</Grid>
      </Grid>
    </Button>
  );
}
