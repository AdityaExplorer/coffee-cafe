
import React, { useEffect, useState } from 'react';
import { useCart } from '../store/CartContext';
import { MdDelete } from "react-icons/md";
import './Cart.css';
import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";

const Cart = () => {
  const { cartItems,removeFromCart } = useCart();
  
  const[total,setTotal]=useState(0)
  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0); // Ensure item.price is a valid number
    setTotal(newTotal);
  }, [cartItems]);
  
  return (
    <>
    <div className="cart-container">
  <h1>Welcome to the Cart Page</h1>
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
          <button onClick={() => removeFromCart(index)}><MdDelete /></button>
          <button onClick={()=>increment(item.price)}><CiCirclePlus /></button>
          <p className='inital_quantity'>0</p>
          <button><CiCircleMinus /></button>
        </div>
      ))}
    </div>
  )}
  <div className="total">
    <h2>Total Price: ₹{Number(total).toFixed(2)}</h2>
    <div className="offer">
      <select name="" id="" value='Offer'>
        <option value="">NEW</option>
        <option value="">Min. order above 3000</option>
      </select>
    </div>
  </div>
</div>
    </>
  );
};

export default Cart;
