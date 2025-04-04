import React from "react";
import "../styles/Cart.css";

const CartItem = ({ item, updateQuantity, isFreeGift }) => {
  return (
    <div className="cart-item">
      <p>{item.name} - ₹{item.price} x {item.quantity}</p>
      {!isFreeGift && (
        <div className="cart-controls">
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
      )}
      {isFreeGift && <span className="free-gift">FREE GIFT</span>}
    </div>
  );
};

export default CartItem;