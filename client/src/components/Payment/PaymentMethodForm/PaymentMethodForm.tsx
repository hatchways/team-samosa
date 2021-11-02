import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ELEMENT_OPTIONS } from './elementsOptions';
import SetupForm from '../SetupForm/SetupForm';

const stripePromise = loadStripe(
  'pk_test_51Jpf1xL3yecqfVKoBMYtgnFlrSlM0P9EtRpP6PoVpvlckjmwX5J595j2M35S6w4Plxe2ThjCO1cbAENg3bzJmPt900SDffRaaG',
);

export default function PaymentMethodForm(): JSX.Element {
  const [AddPaymentMethod, setAddPaymentMethod] = useState(<div>Loading...</div>);
  useEffect(() => {
    (async function () {
      const res = await fetch('/payment/setup-payment-intent', {
        method: 'POST',
      });
      const data = await res.json();
      const clientSecret = { clientSecret: data.client_secret };
      const options: StripeElementsOptions = { ...clientSecret, ...ELEMENT_OPTIONS };
      setAddPaymentMethod(
        <Elements stripe={stripePromise} options={options}>
          <Box width="100%" p={3} alignSelf="center">
            <Grid container justify="center" direction="column">
              <Grid item>
                <SetupForm />
              </Grid>
            </Grid>
          </Box>
        </Elements>,
      );
    })();
  }, []);
  return AddPaymentMethod;
}
