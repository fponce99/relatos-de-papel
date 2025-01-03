import { useContext } from "react";
import { Image } from "react-bootstrap";
import { Rating } from "./Rating";
import "../styles/CardBook.css";
import { ProductSelectedContext } from "../utils/context/ProductSelectedContext";
import PropTypes from "prop-types";

const CardBook = (props) => {
  const { id, title, price, description, rating, image } = props;
  const {
    setIsOpen,
    setIdProduct,
    setImageProduct,
    setTitleProduct,
    setPriceProduct,
    setDescriptionProduct,
  } = useContext(ProductSelectedContext);

  const openModal = () => {
    setIsOpen(true);
    setIdProduct(id);
    setImageProduct(image);
    setTitleProduct(title);
    setPriceProduct(price);
    setDescriptionProduct(description);
  };

  return (
    <div className="card" onClick={openModal}>
      <Image src={image} alt={title} />
      <div className="card-data">
        <h1>{title}</h1>
        <div className="description-price">
          <Rating stars={rating} />
          <h3>{price}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

CardBook.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardBook;
