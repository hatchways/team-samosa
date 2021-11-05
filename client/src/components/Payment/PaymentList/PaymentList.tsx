import ModalPaper from '../../Modal/ModalPaper/ModalPaper';
import PaymentListForm from '../PaymentListForm/PaymentListForm';

export default function PaymentList(): JSX.Element {
  return (
    <ModalPaper title="Choose a payment method">
      <PaymentListForm />
    </ModalPaper>
  );
}
