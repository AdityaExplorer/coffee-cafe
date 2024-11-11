// Cart.js
import React from 'react';
import { useCart } from '../store/CartContext';

const Cart = () => {
  const { cartItems } = useCart();
   
  

  return (
    <>
    <div>
      <h1>Welcome to the Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
              <p>Product Id: {item.id}</p>
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="total">
        <h2>Total Price: 400</h2>
    </div>
    </>
  );
};

export default Cart;
