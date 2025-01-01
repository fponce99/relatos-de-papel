import { useContext } from "react";
import { Button } from "react-bootstrap";
import "../styles/ModalDetailsProduct.css";
import { Rating } from "./Rating";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ProductSelectedContext } from "../utils/context/ProductSelectedContext";
import { useCartContext } from "../utils/context/CartContext";

const ModalDetailsProduct = () => {
  const {
    setIsOpen,
    idProduct,
    imageProduct,
    titleProduct,
    priceProduct,
    descriptionProduct,
  } = useContext(ProductSelectedContext);

  const { addToCart } = useCartContext();

  const setCloseModal = () => {
    setIsOpen(false);
  };

  const addProduct = () => {
    addToCart({
      id: idProduct,
      title: titleProduct,
      price: priceProduct,
      image: imageProduct,
    });
    setCloseModal();
  };

  return (
    <div className="ModalContainer">
      <div className="ContentResultModalContainer">
        <div className="ProductImageContainer">
          <AiOutlineCloseCircle
            className="closeModal"
            onClick={setCloseModal}
          />
          <img src={imageProduct} />
        </div>
        <div className="DetailsModalContainer">
          <div className="HeaderDetailModalContainer">
            <h3>{titleProduct}</h3>
            <h3>{priceProduct}</h3>
          </div>
          <Rating stars={3} />
          <h6>{descriptionProduct}</h6>
          <Button className="add-button" onClick={addProduct}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailsProduct;
