import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PaymentCard from '../PaymentCard/PaymentCard';
import ModalButton from '../../Modal/ModalButton/ModalButton';

export default function PaymentListForm(): JSX.Element {
  const [listPaymentMethods, setListPaymentMethods] = useState(<div>Loading...</div>);
  useEffect(() => {
    fetch('/payment/list-payment-methods', {
      method: 'GET',
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setListPaymentMethods(
          <>
            <Box p={3} alignSelf="center">
              <Grid container justify="center" spacing={2} xs={12}>
                {data.paymentMethods.data.map((element: any) => (
                  <Grid item key={element.id}>
                    <PaymentCard card={element.card} />
                  </Grid>
                )) || 'You have no cards'}
              </Grid>
            </Box>
            <Box textAlign="center">
              <ModalButton>Add a new card</ModalButton>
            </Box>
          </>,
        );
      });
    });
  }, []);
  return listPaymentMethods;
}
