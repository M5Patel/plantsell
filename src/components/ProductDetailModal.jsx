import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import {
  Dialog,
  Box,
  IconButton,
  Rating,
  Chip,
  Button,
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import "./ProductDetailModal.css";

const ProductDetailModal = ({ product, onClose, open }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return null;

  // Generate 4 dummy images using the product image
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    const notification = document.createElement("div");
    notification.className = "product-notification";
    notification.innerHTML = `✅ ${product.name} x${quantity} added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
    setQuantity(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && product && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            className: "product-modal-paper",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="product-detail-container"
          >
            {/* Close Button */}
            <IconButton
              onClick={onClose}
              className="close-btn"
              size="large"
            >
              <CloseIcon />
            </IconButton>

            <Grid container spacing={4} className="modal-grid">
              {/* LEFT SIDE - IMAGE GALLERY */}
              <Grid item xs={12} sm={6} className="image-section">
                <motion.div
                  className="main-image-wrapper"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="main-image-container">
                    <motion.img
                      key={mainImage}
                      src={mainImage}
                      alt={product.name}
                      className="main-image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="image-discount-badge">
                      {Math.round(((product.price * 1.4 - product.price) / (product.price * 1.4)) * 100)}% OFF
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="thumbnail-gallery">
                    {images.map((img, idx) => (
                      <motion.button
                        key={idx}
                        className={`thumbnail ${mainImage === img ? "active" : ""}`}
                        onClick={() => setMainImage(img)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={img} alt={`View ${idx + 1}`} />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </Grid>

              {/* RIGHT SIDE - PRODUCT DETAILS */}
              <Grid item xs={12} sm={6} className="details-section">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="details-wrapper"
                >
                  {/* Brand & Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <p className="category-label">Premium {product.category}</p>
                    <h1 className="product-title">{product.name}</h1>
                  </motion.div>

                  {/* Rating & Reviews */}
                  <motion.div
                    className="rating-reviews"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="rating-box">
                      <Rating
                        value={parseFloat(product.rating)}
                        readOnly
                        precision={0.5}
                        size="large"
                      />
                      <span className="rating-number">{product.rating}</span>
                    </div>
                    <span className="review-count">{Math.floor(Math.random() * 5000) + 1000} Reviews</span>
                  </motion.div>

                  <Divider sx={{ my: 2 }} />

                  {/* Price Section */}
                  <motion.div
                    className="price-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    <div className="price-display">
                      <span className="current-price">₹{product.price}</span>
                      <span className="original-price">₹{Math.round(product.price * 1.4)}</span>
                      <span className="save-amount">
                        Save ₹{Math.round(product.price * 0.4)}
                      </span>
                    </div>
                  </motion.div>

                  {/* Offers */}
                  <motion.div
                    className="offers-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="section-title">Offers</h3>
                    <div className="offer-items">
                      <Chip
                        label="🎁 Special Offer Active"
                        color="success"
                        variant="outlined"
                      />
                      <Chip
                        label="🚚 Free Delivery"
                        color="primary"
                        variant="outlined"
                      />
                      <Chip
                        label="✅ 30-Day Replace"
                        color="warning"
                        variant="outlined"
                      />
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    className="description-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    <h3 className="section-title">About</h3>
                    <p className="description-text">{product.description}</p>
                  </motion.div>

                  {/* Quantity Selector */}
                  <motion.div
                    className="quantity-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="section-title">Quantity</h3>
                    <div className="quantity-selector">
                      <motion.button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="qty-btn"
                      >
                        <RemoveIcon />
                      </motion.button>
                      <input type="text" value={quantity} readOnly className="qty-input" />
                      <motion.button
                        onClick={() => setQuantity(quantity + 1)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="qty-btn"
                      >
                        <AddIcon />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="action-buttons-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <motion.button
                      className="btn-add-cart primary"
                      onClick={handleAddToCart}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCartIcon /> Add to Cart
                    </motion.button>
                    <motion.button
                      className="btn-wishlist"
                      onClick={() => setIsFavorite(!isFavorite)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />} Wishlist
                    </motion.button>
                  </motion.div>

                  {/* Delivery & Safety Info */}
                  <motion.div
                    className="info-items"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="info-item">
                      <LocalShippingIcon />
                      <div>
                        <h4>FREE Delivery</h4>
                        <p>Orders above ₹499</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <HealthAndSafetyIcon />
                      <div>
                        <h4>100% Safe</h4>
                        <p>Authentic plants only</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <VerifiedIcon />
                      <div>
                        <h4>Guaranteed</h4>
                        <p>30-day replacement</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Care Tips */}
                  <motion.div
                    className="care-tips-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                  >
                    <h3 className="section-title">Care Instructions</h3>
                    <div className="tips-list">
                      <p>☀️ Place in bright, indirect light</p>
                      <p>💧 Water when soil is 1 inch dry</p>
                      <p>🌡️ Keep temperature 18-24°C</p>
                      <p>🌿 Fertilize once per month</p>
                    </div>
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
