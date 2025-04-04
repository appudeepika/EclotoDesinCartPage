import React from "react";
import CartItem from "./CartItem";
import ProgressBar from "./ProgressBar";
import "../styles/Cart.css";

const Cart = ({ cart, subtotal, threshold, updateQuantity }) => {
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Subtotal: ₹{subtotal}</p>
      <ProgressBar subtotal={subtotal} threshold={threshold} />
      <div className="cart-items">
        {cart.length === 0 ? <p>Your cart is empty</p> : cart.map((item) => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} isFreeGift={item.id === 99} />
        ))}
      </div>
    </div>
  );
};

export default Cart;