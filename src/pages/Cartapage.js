import React ,{useState , useEffect} from 'react';
import './cartpage.css';

const CartaPage = ({ isVisible, onClose,cartItems}) => {
  


  return (
        <div className={`cart-page ${isVisible ? 'visible' : ''}`}>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <span>{item.title}</span> - <span>${item.price}</span>
                  </li>
                ))}
              </ul>
              <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            </>
          )}
          <button onClick={onClose}>Remove</button>
          <button >Buy Now</button>
        </div>
  );
};

export default CartaPage;