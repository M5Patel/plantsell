import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "🛍️ Shop",
      links: [
        { name: "All Plants", action: () => navigate("/shop") },
        { name: "Indoor Plants", action: () => navigate("/shop") },
        { name: "Outdoor Plants", action: () => navigate("/shop") },
        { name: "Best Sellers", action: () => navigate("/shop") },
        { name: "New Arrivals", action: () => navigate("/shop") },
      ],
    },
    {
      title: "📚 Learn",
      links: [
        { name: "Plant Care Guide", action: () => navigate("/") },
        { name: "Growing Tips", action: () => navigate("/") },
        { name: "Plant Encyclopedia", action: () => navigate("/") },
        { name: "Gardening 101", action: () => navigate("/") },
      ],
    },
    {
      title: "💬 Connect",
      links: [
        { name: "About Us", action: () => navigate("/") },
        { name: "Contact Us", action: () => navigate("/") },
        { name: "Live Chat", action: () => navigate("/") },
        { name: "FAQ", action: () => navigate("/") },
      ],
    },
    {
      title: "📋 Policies",
      links: [
        { name: "Privacy Policy", action: () => navigate("/") },
        { name: "Terms & Conditions", action: () => navigate("/") },
        { name: "Return Policy", action: () => navigate("/") },
        { name: "Shipping Info", action: () => navigate("/") },
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
        {/* Top Section - Company Info & Links */}
        <motion.div
          className="footer-top"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="footer-section company-info" variants={itemVariants}>
            <div className="footer-logo">
              <span className="logo-icon">🌿</span>
              <span className="logo-text">M5 Plants</span>
            </div>
            <p className="company-desc">
              Bringing nature's beauty to your home since 2020. We offer authentic, healthy plants
              with expert care guidance and fast delivery.
            </p>
            
            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link facebook"
                  title="Facebook"
                >
                  f
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link instagram"
                  title="Instagram"
                >
                  📷
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link twitter"
                  title="Twitter"
                >
                  𝕏
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link youtube"
                  title="YouTube"
                >
                  ▶️
                </motion.a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>+91 9876 543210</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>support@m5plants.com</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Links Grid */}
          {footerSections.map((section) => (
            <motion.div key={section.title} className="footer-section" variants={itemVariants}>
              <h3>{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      className="footer-link"
                      onClick={link.action}
                      whileHover={{ x: 8, color: "#4caf50" }}
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

        {/* Newsletter Section */}
        <motion.div
          className="newsletter-wrapper"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="newsletter-section">
            <motion.div className="newsletter-content">
              <h3>🎁 Get Special Offers & Tips</h3>
              <p>Join thousands of plant lovers! Get 15% off on your first order + exclusive care tips.</p>
              
              <motion.form
                className="newsletter-form"
                onSubmit={handleSubscribe}
              >
                <motion.div
                  className="input-wrapper"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="subscribe-btn"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(76, 175, 80, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {subscribed ? "✓ Subscribed!" : "Subscribe"}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="trust-badges"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="badge" variants={itemVariants}>
                <span className="badge-icon">🔒</span>
                <div>
                  <h4>Secure</h4>
                  <p>100% Encrypted</p>
                </div>
              </motion.div>
              <motion.div className="badge" variants={itemVariants}>
                <span className="badge-icon">🚚</span>
                <div>
                  <h4>Fast Shipping</h4>
                  <p>3-5 Days</p>
                </div>
              </motion.div>
              <motion.div className="badge" variants={itemVariants}>
                <span className="badge-icon">↩️</span>
                <div>
                  <h4>Easy Returns</h4>
                  <p>30 Days</p>
                </div>
              </motion.div>
              <motion.div className="badge" variants={itemVariants}>
                <span className="badge-icon">⭐</span>
                <div>
                  <h4>Trusted</h4>
                  <p>10K+ Reviews</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Divider */}
        <motion.div className="footer-divider" />

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 M5 Plants Company. All rights reserved. | Made with 🌿 for plant lovers
            </p>
            <div className="footer-bottom-links">
              <a href="#!">Privacy</a>
              <span className="divider">•</span>
              <a href="#!">Terms</a>
              <span className="divider">•</span>
              <a href="#!">Cookies</a>
              <span className="divider">•</span>
              <a href="#!">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

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
