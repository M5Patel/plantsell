import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { plantProducts } from "../data/plantData";
import "../styles/Products.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  // Flatten all products
  const allProducts = Object.values(plantProducts).flat();
  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : plantProducts[selectedCategory] || [];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <motion.div
      className="products-container"
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
        <h1>🌿 Our Complete Plant Collection</h1>
        <p>Browse through our extensive selection of beautiful plants</p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="category-filter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Plants
        </motion.button>
        {Object.keys(plantProducts).map((category) => (
          <motion.button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="product-card-item"
            variants={itemVariants}
            data-aos="fade-up"
            onClick={() => setSelectedProduct(product)}
          >
            <motion.div
              className="product-image-container"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <span className="view-details-badge">View Details</span>
              </div>
            </motion.div>

            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-short-desc">{product.description.substring(0, 50)}...</p>

              <div className="product-footer-info">
                <div>
                  <span className="product-price">₹{product.price}</span>
                  <span className="product-star">⭐ {product.rating}</span>
                </div>
                <motion.button
                  className="quick-add-btn"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  🛒
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <motion.div
          className="no-products"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No products found in this category.</p>
        </motion.div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <motion.div
          className="product-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            className="product-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>✕</button>

            <div className="modal-grid">
              <motion.img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="modal-product-image"
                whileHover={{ scale: 1.05 }}
              />

              <div className="modal-product-info">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-category">{selectedProduct.category}</p>
                <p className="modal-description">{selectedProduct.description}</p>

                <div className="modal-specs">
                  <div className="spec">
                    <span className="spec-label">Price:</span>
                    <span className="spec-value">₹{selectedProduct.price}</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Rating:</span>
                    <span className="spec-value">⭐ {selectedProduct.rating}/5</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Category:</span>
                    <span className="spec-value">{selectedProduct.category}</span>
                  </div>
                </div>

                <motion.button
                  className="modal-add-to-cart"
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

export default Products;
