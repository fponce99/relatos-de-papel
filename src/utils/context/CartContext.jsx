import React, { createContext, useContext } from 'react';
import { useCart } from '../CustomHooks/useCart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cart = useCart();
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext}