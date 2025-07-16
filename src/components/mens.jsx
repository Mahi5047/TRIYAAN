import React, { useState } from 'react';
import './allproducts.css';

function MenProducts() {
  const [cart, setCart] = useState({});

  const menItems = [
    { name: "Men's Classic Shirt", price: 999 },
    { name: "Men's Hoodie", price: 1499 },
    { name: "Men's Polo T-Shirt", price: 799 },
    { name: "Men's cargo-pant", category: "men", price: 899 },
  ];

  const getImageByName = (name) => {
    switch (name) {
      case "Men's Classic Shirt":
        return "https://tse1.mm.bing.net/th/id/OIP.4G6JXkP-FwtnWbyksoABfQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3";
      case "Men's Hoodie":
        return "https://tse2.mm.bing.net/th/id/OIP.7SV4G0D0PyYI8UTF-Z-JUgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3";
      case "Men's Polo T-Shirt":
        return "https://ohtopten.com/wp-content/uploads/2015/08/Best-Polo-Shirts-for-Men-11.jpg";
        case "Men's cargo-pant":
      return "https://i5.walmartimages.com/seo/Wrangler-Men-s-and-Big-Men-s-Relaxed-Fit-Cargo-Pants-With-Stretch_eee54591-b804-42d3-b555-cb3a094371c1_1.852754631f0efe3668ebd055ca1668ae.jpeg";
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
        <h1>👔 Men's Collection</h1>
        <div className="cart-count">
          🛒 Items: {getTotalItems()} | ₹{getTotalPrice()}
        </div>
      </div>

      <div className="product-grid">
        {menItems.map((product, index) => {
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

export default MenProducts;
