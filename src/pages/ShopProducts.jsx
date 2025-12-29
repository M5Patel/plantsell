import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { plantProducts } from "../data/plantData";
import "../styles/ShopProducts.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ShopProducts = () => {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    let products = selectedCategory === "all" 
      ? Object.values(plantProducts).flat() 
      : plantProducts[selectedCategory] || [];

    if (searchTerm) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(products);
  }, [selectedCategory, searchTerm]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart! 🛒`);
  };

  const categories = Object.keys(plantProducts);

  return (
    <div className="shop-container">
      {/* Header */}
      <motion.div
        className="shop-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>🌿 Shop Plants</h1>
        <p>{filteredProducts.length} products available {searchTerm && `matching "${searchTerm}"`}</p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="category-tabs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <motion.button
          className={`tab ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Plants
        </motion.button>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            className={`tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Main Layout */}
      <div className="shop-layout">
        {/* Products Grid */}
        <motion.div
          className="products-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <span className="view-btn">View Details</span>
                  </div>
                </div>

                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p className="category-tag">{product.category}</p>
                  <div className="product-footer">
                    <span className="price">₹{product.price}</span>
                    <span className="rating">⭐ {product.rating}</span>
                  </div>
                  <motion.button
                    className="add-btn"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    🛒 Add
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="no-products">No plants found. Try different search terms!</div>
          )}
        </motion.div>

        {/* Side Detail Panel */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="detail-panel"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button 
                className="close-panel"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>

              <motion.img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="detail-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              />

              <div className="detail-content">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {selectedProduct.name}
                </motion.h2>

                <motion.p
                  className="detail-category"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProduct.category}
                </motion.p>

                <motion.div
                  className="detail-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  {selectedProduct.description}
                </motion.div>

                <motion.div
                  className="detail-specs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="spec-item">
                    <span className="spec-label">Price</span>
                    <span className="spec-value">₹{selectedProduct.price}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Rating</span>
                    <span className="spec-value">⭐ {selectedProduct.rating}/5</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Category</span>
                    <span className="spec-value">{selectedProduct.category}</span>
                  </div>
                </motion.div>

                <motion.button
                  className="add-to-cart-btn"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop */}
        {selectedProduct && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ShopProducts;
