import { useCartContext } from "../utils/context/CartContext";
import "../styles/PaymentDetails.css";

const PaymentDetails = () => {
  const { getTotalPrice } = useCartContext();
  const amount = parseFloat(getTotalPrice());
  const tax = parseFloat((amount * 0.15).toFixed(2));

  const calculateTotal = () => {
    return amount + tax + 1.21 + 0.45;
  };
  
  return (
    <div className="payment-details">
      <div>
        <h2>Resumen</h2>
        <div className="field-container">
          <h3>Productos</h3>
          <h3>${amount}</h3>
        </div>
        <div className="field-container">
          <h3>Envio</h3>
          <h3>$1.21</h3>
        </div>
        <div className="field-container">
          <h3>Tarifa de servicio</h3>
          <h3>$0.45</h3>
        </div>
        <div className="field-container">
          <h3>Impuesto (15%)</h3>
          <h3>${tax}</h3>
        </div>
      </div>
      <div className="field-container">
        <h2>Total:</h2>
        <h2>{calculateTotal()}</h2>
      </div>
    </div>
  );
};

export { PaymentDetails };
