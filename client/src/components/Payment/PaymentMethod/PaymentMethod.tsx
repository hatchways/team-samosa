import ModalPaper from '../../Modal/ModalPaper/ModalPaper';
import PaymentMethodForm from '../PaymentMethodForm/PaymentMethodForm';

export default function PaymentMethod(): JSX.Element {
  return (
    <ModalPaper title="Enter your card details">
      <PaymentMethodForm />
    </ModalPaper>
  );
}
