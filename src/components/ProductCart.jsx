import { Button, Image } from "react-bootstrap";
import "../styles/ProductCard.css";
import { useCartContext } from "../utils/context/CartContext";
import PropTypes from "prop-types";

const ProductCart = ({ id, image, title, price }) => {
  const { removeFromCart } = useCartContext();

  const removeProduct = () => {
    removeFromCart(id);
  };
  return (
    <div className="product-card">
      <Image src={image} />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <Button onClick={removeProduct}>Delete</Button>
    </div>
  );
};

ProductCart.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCart;
