import { PaymentDetails } from "./PaymentDetails";
import { Button } from "react-bootstrap";
import '../styles/PaymentContent.css'

const PaymentContent = () => {
  return (
    <div className='payment-content'>
      <PaymentDetails />
      <Button className="pay-button">Pagar</Button>
    </div>
  );
};

export { PaymentContent };
