import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartContext } from "../utils/context/CartContext";
import ProductCart from "./ProductCart";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, getTotalPrice } = useCartContext();
  const navigate = useNavigate();

  const isCartEmpty = cart.length === 0;

  const goToPay = () => {
    console.log("hola");
    navigate("/payment");
  };

  return (
    <div className="cart">
      <h2>Carrito </h2>
      {cart.map((product, index) => {
        return (
          <ProductCart
            key={index}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        );
      })}
      <h3>Total: ${getTotalPrice()}</h3>
      <Button
        className={`pay-button ${isCartEmpty ? "disabled" : "enabled"}`}
        onClick={goToPay}
        disabled={isCartEmpty}
      >
        Pagar
      </Button>
    </div>
  );
};

export { Cart };
