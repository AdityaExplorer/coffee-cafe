// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [offer, setOffer] = useState('');
  const add_to_cart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the product already exists, increment the quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If the product doesn't exist, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove a product from the cart
  const removeFromCart = (itemIndex) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== itemIndex));
  };

  // Increment product quantity
  const incrementQuantity = (itemIndex) => {
    setCartItems((prevItems) =>
      prevItems.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement product quantity
  const decrementQuantity = (itemIndex) => {
    setCartItems((prevItems) =>
      prevItems.map((item, index) =>
        index === itemIndex && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  const applyOffer = (total) => {
    switch (offer) {
      case 'NEW':
        return total * 0.90;  // Apply 10% discount for 'NEW' offer
      case 'Min. order above 3000':
        return total >= 3000 ? total * 0.80 : total;  // Apply 20% discount if total > 3000
      default:
        return total;
    }
  };
  // Calculate the total price
  const getTotal = () => {
    let total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return applyOffer(total);  // Apply the selected offer to the total
  };

  // Handle offer change
  const handleOfferChange = (newOffer) => {
    setOffer(newOffer);
  };


  return (
    <CartContext.Provider value={{  cartItems,
      add_to_cart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      getTotal,
      handleOfferChange, 
      offer,  }}>
      {children}
    </CartContext.Provider>
  );
};
