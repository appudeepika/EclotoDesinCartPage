import React from "react";
import "../styles/Cart.css";

const ProgressBar = ({ subtotal, threshold }) => {
  const progress = Math.min((subtotal / threshold) * 100, 100);
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {subtotal < threshold ? `Add ₹${threshold - subtotal} more for a FREE Wireless Mouse!` : "You got a free Wireless Mouse!"}
      </div>
    </div>
  );
};

export default ProgressBar;