import { createContext, useContext } from "react";
import { useCart } from "../CustomHooks/useCart";
import PropTypes from 'prop-types'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cart = useCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, useCartContext };
