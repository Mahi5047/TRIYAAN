import React, { useState } from 'react';
import './allproducts.css';

function getImageByName(name) {
  switch (name) {
    case "Men's Classic Shirt":
      return "https://tse1.mm.bing.net/th/id/OIP.4G6JXkP-FwtnWbyksoABfQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3";
    case "Men's Hoodie":
      return "https://tse2.mm.bing.net/th/id/OIP.7SV4G0D0PyYI8UTF-Z-JUgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3";
    case "Men's Polo T-Shirt":
      return "https://ohtopten.com/wp-content/uploads/2015/08/Best-Polo-Shirts-for-Men-11.jpg";
      case "Men's cargo-pant":
      return "https://i5.walmartimages.com/seo/Wrangler-Men-s-and-Big-Men-s-Relaxed-Fit-Cargo-Pants-With-Stretch_eee54591-b804-42d3-b555-cb3a094371c1_1.852754631f0efe3668ebd055ca1668ae.jpeg";
    case "Women's Saree":
      return "https://cdn.sareeka.com/image/data2020/embroidered-silk-saree-141031.jpg";
     
    case "Women's Kurti":
      return "https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/781214966/Untitled_design__40_.jpg";
    case "Kids T-Shirt":
      return "https://tse3.mm.bing.net/th/id/OIP.0pQW11BT7ANbfQDzggg3lwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
    case "Kids Shirt":
      return "https://tse3.mm.bing.net/th/id/OIP.NWRg9qv-x2HLC48KFQCxVgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
    default:
      return "https://via.placeholder.com/300x200?text=No+Image";
  }
}

const allProducts = [
  { name: "Men's Classic Shirt", category: "men", price: 999 },
  { name: "Men's Hoodie", category: "men", price: 1499 },
  { name: "Men's Polo T-Shirt", category: "men", price: 799 },
  { name: "Men's cargo-pant", category: "men", price: 899 },
  { name: "Women's Saree", category: "women", price: 1899 },
  { name: "Women's Kurti", category: "women", price: 999 },
  { name: "Kids T-Shirt", category: "kids", price: 499 },
  { name: "Kids Shirt", category: "kids", price: 599 },
];

function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState({});

  const filteredProducts =
    selectedCategory === 'all'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.name]: {
        quantity: (prev[product.name]?.quantity || 0) + 1,
        price: product.price,
      },
    }));
  };

  const handleIncrease = (productName) => {
    setCart((prev) => ({
      ...prev,
      [productName]: {
        ...prev[productName],
        quantity: prev[productName].quantity + 1,
      },
    }));
  };

  const handleDecrease = (productName) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[productName].quantity > 1) {
        updated[productName].quantity -= 1;
      } else {
        delete updated[productName];
      }
      return updated;
    });
  };

  const getTotalQuantity = () =>
    Object.values(cart).reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    Object.values(cart).reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="all-products-page">
      <div className="header-with-cart">
        <h1>🛍️ Triyaan All Products</h1>
        <div className="cart-count">
          🛒 Items: {getTotalQuantity()} | ₹{getTotalPrice()}
        </div>
      </div>

      <div className="filter-buttons">
        {['all', 'men', 'women', 'kids'].map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, index) => {
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

export default AllProducts;
