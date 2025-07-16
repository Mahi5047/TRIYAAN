import React, { useState } from 'react';
import './allproducts.css';

function WomenProducts() {
  const [cart, setCart] = useState({});

  const womenItems = [
    { name: "Women's Saree", price: 1899 },
    { name: "Women's Kurti", price: 999 },
  ];

  const getImageByName = (name) => {
    switch (name) {
      case "Women's Saree":
        return "https://cdn.sareeka.com/image/data2020/embroidered-silk-saree-141031.jpg";
      case "Women's Kurti":
        return "https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/781214966/Untitled_design__40_.jpg";
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
        <h1>👗 Women's Collection</h1>
        <div className="cart-count">
          🛒 Items: {getTotalItems()} | ₹{getTotalPrice()}
        </div>
      </div>

      <div className="product-grid">
        {womenItems.map((product, index) => {
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

export default WomenProducts;
