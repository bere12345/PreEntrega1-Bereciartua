import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const cartItems = 5; 

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="badge">{cartItems}</span>
    </div>
  );
};

export default CartWidget;