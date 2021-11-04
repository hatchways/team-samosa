import { useEffect, useState } from 'react';
import ElementsBox from './ElementsBox';
import CircularProgressBox from './CircularProgressBox';

function ElementContent(props: { isLoading: boolean; clientSecret: string }) {
  const isLoading = props.isLoading;
  if (isLoading) {
    return <CircularProgressBox />;
  }
  return <ElementsBox clientSecret={props.clientSecret} />;
}

export default function PaymentMethodForm(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    if (clientSecret) {
      setIsLoading(false);
    }
  }, [clientSecret]);

  useEffect(() => {
    (async function () {
      const res = await fetch('/payment/setup-payment-intent', {
        method: 'POST',
      });
      const data = await res.json();
      setClientSecret(data.client_secret);
    })();
  }, []);
  return <ElementContent isLoading={isLoading} clientSecret={clientSecret} />;
}
