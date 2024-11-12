// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const add_to_cart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  const removeFromCart = (itemIndex) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== itemIndex));
  };

  return (
    <CartContext.Provider value={{ cartItems, add_to_cart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
