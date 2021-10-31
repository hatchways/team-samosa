import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { theme } from '../../../themes/theme';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import SetupForm from '../SetupForm/SetupForm';

import useStyles from './useStyles';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51Jpf1xL3yecqfVKoBMYtgnFlrSlM0P9EtRpP6PoVpvlckjmwX5J595j2M35S6w4Plxe2ThjCO1cbAENg3bzJmPt900SDffRaaG',
);

export default function PaymentMethodForm(): JSX.Element {
  const classes = useStyles();
  const [AddPaymentMethod, setAddPaymentMethod] = useState(<div>Loading...</div>);
  useEffect(() => {
    fetch('/payment/setup-payment-intent', {
      method: 'POST',
    }).then((res) => {
      res.json().then((data) => {
        setAddPaymentMethod(
          <Elements
            stripe={stripePromise}
            options={{
              fonts: [
                { cssSrc: 'https://fonts.googleapis.com/css2?family=Poppins' },
                { cssSrc: 'https://fonts.googleapis.com/css2?family=Open+Sans' },
                { cssSrc: 'https://fonts.googleapis.com/css2?family=Roboto' },
              ],
              clientSecret: data.client_secret,
              appearance: {
                theme: 'none',
                variables: {
                  colorPrimary: theme.palette.primary.main,
                  colorBackground: 'white',
                  colorText: theme.palette.text.primary,
                  colorDanger: '#df1b41',
                  fontFamily: 'Poppins',
                  borderRadius: `${theme.shape.borderRadius}px`,
                  // See all possible variables below
                },
                rules: {
                  '.Input': {
                    border: `1px solid ${theme.palette.text.secondary}`,
                    padding: `18.5px 14px`,
                    fontSize: '16px',
                  },

                  '.Input:hover': {
                    border: `1px solid ${theme.palette.text.primary}`,
                  },

                  '.Input:focus': {
                    border: `1px solid ${theme.palette.primary.main}`,
                    color: 'purple',
                  },

                  '.Input--invalid': {},
                  '.Label': {
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    paddingBottom: '0.5rem',
                  },
                },
              },
            }}
          >
            <Box width="100%" p={3} alignSelf="center">
              <Grid container justify="center" direction="column">
                <Grid item>
                  <Typography component="h1" variant="h4">
                    Enter your card details
                  </Typography>
                </Grid>
                <Grid item>
                  <SetupForm />
                </Grid>
              </Grid>
            </Box>
          </Elements>,
        );
      });
    });
  }, []);

  return AddPaymentMethod;
}
