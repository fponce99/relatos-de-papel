import { useState, createContext } from "react";

const ProductSelectedContext = createContext();

function ProductSelectedProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [idProduct, setIdProduct] = useState("")
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");

  return (
    <ProductSelectedContext.Provider
      value={{
        isOpen,
        setIsOpen,
        idProduct,
        setIdProduct,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct
      }}
    >
      {children}
    </ProductSelectedContext.Provider>
  );
}

export { ProductSelectedContext, ProductSelectedProvider };
