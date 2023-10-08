import React from "react";

const Card = ({ amount, checkoutHandler }) => {
  return (
    <div>
      <button>₹{amount}</button>
      <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
    </div>
  );
};

export default Card;
