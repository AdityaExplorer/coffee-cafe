
import React, { useEffect, useState } from 'react';
import { useCart } from '../store/CartContext';
import { MdDelete } from "react-icons/md";
import './Cart.css';
import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";

const Cart = () => {
  const {  cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotal,
    handleOfferChange,
    offer, } = useCart();
  
  const[total,setTotal]=useState(0)
  useEffect(() => {
    setTotal(getTotal());
  }, [cartItems, offer, getTotal]);

  
  return (
    <>
    <div className="cart-container">
  {/* <h1>Welcome to the Cart Page</h1> */}
  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <div>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          {/* <p>Product Id: {item.id}</p> */}
          
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>Price: ₹{item.price}</p>
           {/* Remove item button */}
           <button onClick={() => removeFromCart(index)}>
                <MdDelete />
              </button>

              {/* Increment and decrement quantity buttons */}
              <button onClick={() => incrementQuantity(index)}>
                <CiCirclePlus />
              </button>
              <p className='initial_quantity'>{item.quantity}</p>
              <button onClick={() => decrementQuantity(index)}>
                <CiCircleMinus />
              </button>
        </div>
      ))}
    </div>
  )}
  <div className="total">
        <h2>Total Price: ₹{total.toFixed(2)}</h2>
        <div className="offer">
          <select
            name="offer"
            id="offer"
            value={offer}
            onChange={(e) => handleOfferChange(e.target.value)}
          >
            <option value="">Select Offer</option>
            <option value="NEW">NEW User 10% dicount</option>
            <option value="Min. order above 3000">Min. order above 3000 give 20% discount</option>
          </select>
        </div>
      </div>
    </div>

    </>
  );
};

export default Cart;
