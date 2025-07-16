import React, { useState } from 'react';
import './allproducts.css';

function KidsProducts() {
  const [cart, setCart] = useState({});

  const kidsItems = [
    { name: "Kids T-Shirt", price: 499 },
    { name: "Kids Shirt", price: 599 },
  ];

  const getImageByName = (name) => {
    switch (name) {
      case "Kids T-Shirt":
        return "https://tse3.mm.bing.net/th/id/OIP.0pQW11BT7ANbfQDzggg3lwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
      case "Kids Shirt":
        return "https://tse3.mm.bing.net/th/id/OIP.NWRg9qv-x2HLC48KFQCxVgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
      default:
        return "https://via.placeholder.com/300x200?text=No+Image";
    }
  };

  const handleAddToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.name]: {
        quantity: (prev[product.name]?.quantity || 0) + 1,
        price: product.price,
      },
    }));
  };

  const handleIncrease = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        quantity: prev[name].quantity + 1,
      },
    }));
  };

  const handleDecrease = (name) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[name].quantity > 1) {
        updated[name].quantity -= 1;
      } else {
        delete updated[name];
      }
      return updated;
    });
  };

  const getTotalItems = () =>
    Object.values(cart).reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    Object.values(cart).reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="all-products-page">
      <div className="header-with-cart">
        <h1>🧒 Kids Collection</h1>
        <div className="cart-count">
          🛒 Items: {getTotalItems()} | ₹{getTotalPrice()}
        </div>
      </div>

      <div className="product-grid">
        {kidsItems.map((product, index) => {
          const inCart = cart[product.name];
          return (
            <div className="product-card" key={index}>
              <img
                src={getImageByName(product.name)}
                alt={product.name}
                className="product-image"
              />
              <div className="product-name">{product.name}</div>
              <div className="product-price">₹{product.price}</div>
              {!inCart ? (
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(product.name)}>-</button>
                  <span>{inCart.quantity}</span>
                  <button onClick={() => handleIncrease(product.name)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KidsProducts;
