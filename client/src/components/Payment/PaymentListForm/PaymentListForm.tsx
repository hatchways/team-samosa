import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SetupForm from '../SetupForm/SetupForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51Jpf1xL3yecqfVKoBMYtgnFlrSlM0P9EtRpP6PoVpvlckjmwX5J595j2M35S6w4Plxe2ThjCO1cbAENg3bzJmPt900SDffRaaG',
);

export default function PaymentListForm(): JSX.Element {
  const [listPaymentMethods, setListPaymentMethods] = useState(<div>Loading...</div>);
  useEffect(() => {
    fetch('/payment/list-payment-methods', {
      method: 'GET',
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setListPaymentMethods(
          <Box width="100%" p={3} alignSelf="center">
            <Grid container justify="center" direction="column">
              <Grid item>Hello</Grid>
            </Grid>
          </Box>,
        );
      });
    });
  }, []);
  return listPaymentMethods;
}
