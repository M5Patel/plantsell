import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { plantCategories, plantProducts } from "../data/plantData";
import "../styles/CategoryProducts.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CategoryProducts = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const category = plantCategories.find((c) => c.slug === slug);
  const products = plantProducts[slug] || [];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart! 🛒`);
  };

  if (!category) {
    return (
      <motion.div className="error-container">
        <h2>Category Not Found</h2>
        <button onClick={() => navigate("/categories")}>Back to Categories</button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="category-products-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="products-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <button className="back-btn" onClick={() => navigate("/categories")}>
          ← Back
        </button>
        <h1>
          {category.icon} {category.name}
        </h1>
        <p>{category.description}</p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="product-item"
            variants={itemVariants}
            data-aos="fade-up"
            onClick={() => setSelectedProduct(product)}
          >
            <motion.div
              className="product-image-box"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-badge">View Details</div>
            </motion.div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-footer">
                <div className="product-price-rating">
                  <span className="price">₹{product.price}</span>
                  <span className="rating">⭐ {product.rating}</span>
                </div>
                <motion.button
                  className="add-to-cart-btn"
                  whileHover={{ scale: 1.08, boxShadow: "0 6px 20px rgba(76, 175, 80, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  🛒 Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>
              ✕
            </button>

            <div className="modal-body">
              <motion.img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="modal-image"
                whileHover={{ scale: 1.05 }}
              />

              <div className="modal-details">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-desc">{selectedProduct.description}</p>

                <div className="modal-stats">
                  <div className="stat">
                    <span className="stat-label">Price:</span>
                    <span className="stat-value">₹{selectedProduct.price}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Rating:</span>
                    <span className="stat-value">⭐ {selectedProduct.rating}/5</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Category:</span>
                    <span className="stat-value">{category.name}</span>
                  </div>
                </div>

                <motion.button
                  className="modal-add-btn"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(76, 175, 80, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CategoryProducts;
