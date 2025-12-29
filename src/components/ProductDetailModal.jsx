import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import "./ProductDetailModal.css";

const ProductDetailModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart! 🛒`);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="product-detail-modal"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.button
              className="modal-close-btn"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close modal"
            >
              ✕
            </motion.button>

            <div className="modal-container">
              {/* Left Side - Image Section */}
              <motion.div
                className="modal-image-section"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="image-wrapper">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="product-image-large"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div
                    className="image-badge"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    ⭐ Best Seller
                  </motion.div>
                </div>

                {/* Image Gallery Preview */}
                <div className="image-thumbnails">
                  <motion.div
                    className="thumbnail active"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={product.image} alt="View 1" />
                  </motion.div>
                  <motion.div
                    className="thumbnail"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={product.image} alt="View 2" />
                  </motion.div>
                  <motion.div
                    className="thumbnail"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={product.image} alt="View 3" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Details Section */}
              <motion.div
                className="modal-details-section"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Product Name */}
                <motion.h1
                  className="product-name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {product.name}
                </motion.h1>

                {/* Rating Section */}
                <motion.div
                  className="rating-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="stars">
                    ⭐⭐⭐⭐⭐
                    <span className="rating-value">{product.rating}/5</span>
                  </div>
                  <span className="reviews-count">(2,541 reviews)</span>
                </motion.div>

                {/* Price Section */}
                <motion.div
                  className="price-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="price-box">
                    <span className="current-price">₹{product.price}</span>
                    <span className="original-price">₹{Math.round(product.price * 1.3)}</span>
                    <span className="discount">23% off</span>
                  </div>
                  <div className="offer-badge">🎁 Special Offer</div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="description-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3>About this Product</h3>
                  <p>{product.description}</p>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  className="features-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    <li>✓ 100% Authentic & Fresh</li>
                    <li>✓ Free Delivery</li>
                    <li>✓ 30-Day Replacement Guarantee</li>
                    <li>✓ Expert Care Guide Included</li>
                  </ul>
                </motion.div>

                {/* Specifications */}
                <motion.div
                  className="specs-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3>Specifications</h3>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Category</span>
                      <span className="spec-value">{product.category}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Height</span>
                      <span className="spec-value">12-15 inches</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Light</span>
                      <span className="spec-value">Bright Indirect</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Water</span>
                      <span className="spec-value">Moderate</span>
                    </div>
                  </div>
                </motion.div>

                {/* Care Tips */}
                <motion.div
                  className="care-tips-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                >
                  <h3>Care Instructions</h3>
                  <div className="tips">
                    <p>🌞 Place in bright, indirect sunlight</p>
                    <p>💧 Water when top soil is dry</p>
                    <p>🌡️ Keep temperature between 18-24°C</p>
                    <p>🌿 Mist leaves occasionally for humidity</p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="action-buttons"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    className="btn-add-to-cart"
                    onClick={handleAddToCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>🛒</span> Add to Cart
                  </motion.button>

                  <motion.button
                    className="btn-wishlist"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>❤️</span> Wishlist
                  </motion.button>
                </motion.div>

                {/* Seller Info */}
                <motion.div
                  className="seller-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  <div className="info-item">
                    <span className="info-icon">🚚</span>
                    <div>
                      <h4>Free Delivery</h4>
                      <p>On orders above ₹499</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🛡️</span>
                    <div>
                      <h4>Safe & Secure</h4>
                      <p>100% Authentic guarantee</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⚡</span>
                    <div>
                      <h4>Fast Delivery</h4>
                      <p>Arrives in 3-5 days</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
