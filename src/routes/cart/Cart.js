import React from 'react';
import { useCart } from './CartContext';
import './cart.css';

const DeleteIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
  </svg>
);

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div className="cart">
      <h1>Carrito</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)} className="delete-button">
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
      <h2 className="total">Total: ${getTotal()}</h2>
    </div>
  );
};

export default Cart;












