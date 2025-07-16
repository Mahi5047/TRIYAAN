import React from 'react';
import './cart.css';

function Cart({ cart, handleIncrease, handleDecrease }) {
  const cartItems = Object.entries(cart);

  const totalPrice = cartItems.reduce(
    (total, [_, item]) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(([name, item]) => (
              <div className="cart-item" key={name}>
                <div className="cart-name">{name}</div>
                <div className="cart-price">₹{item.price}</div>
                <div className="cart-qty">
                  <button onClick={() => handleDecrease(name)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(name)}>+</button>
                </div>
                <div className="cart-subtotal">₹{item.quantity * item.price}</div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
