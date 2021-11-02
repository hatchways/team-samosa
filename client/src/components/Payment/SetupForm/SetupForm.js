import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import Box from '@material-ui/core/Box';
import ModalButton from '../../Modal/ModalButton/ModalButton';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { CircularProgress } from '@material-ui/core';

const SetupForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = async (event) => {
    setIsSubmitting(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/payment-methods',
      },
    });

    if (error) {
      updateSnackBarMessage(error.message);
    } else {
      updateSnackBarMessage('Card added');
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Box textAlign="center" paddingTop={6}>
        <ModalButton>{isSubmitting ? <CircularProgress /> : 'Save card'}</ModalButton>
      </Box>
    </form>
  );
};

export default SetupForm;
