import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Delete as DeleteIcon, Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import "./Cart.css";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  return (
    <motion.div
      className="cart-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="cart-header">
        <h1>🛒 Shopping Cart</h1>
        <p>{cartItems.length} items in cart</p>
      </div>

      {cartItems.length === 0 ? (
        <motion.div
          className="empty-cart"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Your cart is empty</h2>
          <p>Add some beautiful plants to get started! 🌿</p>
        </motion.div>
      ) : (
        <div className="cart-content">
          <motion.div className="cart-items">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="cart-item"
                variants={itemVariants}
                exit="exit"
                layout
              >
                <motion.div
                  className="item-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={item.image} alt={item.name} />
                </motion.div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-rating">
                    ⭐ {item.rating || "4.5"} / 5
                  </p>
                </div>

                <div className="item-quantity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    <RemoveIcon />
                  </motion.button>
                  <span>{item.quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <AddIcon />
                  </motion.button>
                </div>

                <div className="item-price">
                  <p className="price">₹{item.price}</p>
                  <p className="total">₹{item.price * item.quantity}</p>
                </div>

                <motion.button
                  className="delete-btn"
                  whileHover={{ scale: 1.1, backgroundColor: "#ef5350" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeFromCart(item.id)}
                >
                  <DeleteIcon />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="cart-summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Order Summary</h2>

            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{getTotalPrice()}</span>
              </div>

              <div className="summary-row">
                <span>Shipping:</span>
                <span className="shipping-cost">FREE</span>
              </div>

              <div className="summary-row">
                <span>Tax (GST):</span>
                <span>₹{(getTotalPrice() * 0.18).toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{(getTotalPrice() * 1.18).toFixed(2)}</span>
              </div>
            </div>

            <motion.div
              className="buttons-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="checkout-btn"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(76, 175, 80, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                ✓ Checkout
              </motion.button>

              <motion.button
                className="continue-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>

              <motion.button
                className="clear-btn"
                whileHover={{ scale: 1.05, backgroundColor: "#ef5350" }}
                whileTap={{ scale: 0.95 }}
                onClick={clearCart}
              >
                Clear Cart
              </motion.button>
            </motion.div>

            <div className="trust-badges">
              <span>🔒 Secure Checkout</span>
              <span>🚚 Free Delivery</span>
              <span>↩️ Easy Returns</span>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
