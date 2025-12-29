import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

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

const Footer = () => {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "All Plants", action: () => navigate("/shop") },
        { name: "Indoor Plants", action: () => navigate("/shop") },
        { name: "Outdoor Plants", action: () => navigate("/shop") },
        { name: "Best Sellers", action: () => navigate("/shop") },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "About Us", action: () => navigate("/") },
        { name: "Contact Us", action: () => navigate("/") },
        { name: "Plant Care Tips", action: () => navigate("/") },
        { name: "Shipping Info", action: () => navigate("/") },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", action: () => navigate("/") },
        { name: "Terms of Service", action: () => navigate("/") },
        { name: "Return Policy", action: () => navigate("/") },
        { name: "Cookie Policy", action: () => navigate("/") },
      ],
    },
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* Main Footer Content */}
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="footer-section" variants={itemVariants}>
            <div className="footer-logo">
              <span className="logo-text">🌿 M5 Plants</span>
            </div>
            <p className="company-desc">
              Bringing nature's beauty to your home. Explore our wide collection of indoor,
              outdoor, and exotic plants.
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                f
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                📷
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                🐦
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                ▶️
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} className="footer-section" variants={itemVariants}>
              <h3>{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.button
                      className="footer-link"
                      onClick={link.action}
                      whileHover={{ color: "#a0d48e" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="newsletter-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Newsletter</h3>
          <p>Subscribe to get special offers and plant care tips!</p>
          <div className="newsletter-form">
            <motion.input
              type="email"
              placeholder="Enter your email"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(76, 175, 80, 0.3)" }}
            />
            <motion.button
              className="subscribe-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(76, 175, 80, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div className="footer-divider" />

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 M5 Plants. All rights reserved.</p>
          <div className="footer-badges">
            <span className="badge">🔒 Secure Checkout</span>
            <span className="badge">🚚 Free Shipping</span>
            <span className="badge">↩️ Easy Returns</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
