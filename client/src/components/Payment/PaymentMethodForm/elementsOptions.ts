import { theme } from '../../../themes/theme';
import { StripeElementsOptions } from '@stripe/stripe-js';

export const ELEMENT_OPTIONS: StripeElementsOptions = {
  fonts: [
    { cssSrc: 'https://fonts.googleapis.com/css2?family=Poppins' },
    { cssSrc: 'https://fonts.googleapis.com/css2?family=Open+Sans' },
    { cssSrc: 'https://fonts.googleapis.com/css2?family=Roboto' },
  ],
  appearance: {
    theme: 'none',
    variables: {
      colorPrimary: theme.palette.primary.main,
      colorBackground: 'white',
      colorText: theme.palette.text.primary,
      colorDanger: '#df1b41',
      fontFamily: 'Poppins',
      borderRadius: `${theme.shape.borderRadius}px`,
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
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        outline: `none`,
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
};
