import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../context/CartContext";
import { plantProducts, plantCategories } from "../data/plantData";
import "../pages/Home.css";
import {
  Container,
  Button,
  Chip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const getFeaturedProducts = () => {
  const allProducts = Object.values(plantProducts).flat();
  return allProducts
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 6);
};

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
    return () => AOS.refresh();
  }, []);

  const slides = [
    {
      title: "Transform Your Space 🌿",
      subtitle: "Discover Premium Plants for Your Home",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      cta: "Shop Now",
    },
    {
      title: "Fresh & Healthy Plants ✨",
      subtitle: "Guaranteed Quality with Expert Care Tips",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      cta: "Explore Collection",
    },
    {
      title: "Limited Time Offers 🎁",
      subtitle: "Up to 40% off on Premium Plants",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      cta: "Get Deals",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleAddToCart = (product) => {
    addToCart(product);
    const notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.textContent = `✅ ${product.name} added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  return (
    <div className="home-container">
      {/* ====== HERO SLIDER ====== */}
      <section className="hero-section">
        <motion.div
          className="hero-slides"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {slides.map((slide, idx) => (
            <motion.div
              key={idx}
              className="hero-slide"
              style={{ background: slide.gradient }}
              initial={{ opacity: 0, x: 100 }}
              animate={currentSlide === idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={currentSlide === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="hero-title"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={currentSlide === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="hero-subtitle"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={currentSlide === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="hero-btn"
                    onClick={() => navigate("/shop")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.cta} →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              className={`indicator ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </section>

      {/* ====== BENEFITS SECTION ====== */}
      <section className="benefits-section">
        <Container maxWidth="lg">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Plants?
          </motion.h2>

          <motion.div
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "🌍", title: "100% Authentic", desc: "Genuine plants sourced directly" },
              { icon: "🚚", title: "Free Shipping", desc: "Orders over ₹500" },
              { icon: "✅", title: "Healthy Plants", desc: "Quality guaranteed or refund" },
              { icon: "💬", title: "24/7 Support", desc: "Expert care guidance" },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="benefit-card"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(76, 175, 80, 0.3)" }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ====== FEATURED PLANTS ====== */}
      <section className="featured-plants-section">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Plants</h2>
            <p className="section-subtitle">Our best-selling premium collection</p>
          </motion.div>

          <motion.div
            className="featured-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="featured-card"
                variants={itemVariants}
                whileHover={{ y: -12 }}
              >
                <div className="product-image-container">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.button
                    className="quick-view-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/shop?search=${product.name}`)}
                  >
                    Quick View
                  </motion.button>
                  <div className="product-badge">⭐ {product.rating}</div>
                </div>

                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "star-full" : "star-empty"}>
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="price-section">
                    <span className="current-price">₹{product.price}</span>
                    <span className="original-price">₹{Math.round(product.price * 1.4)}</span>
                    <span className="discount">
                      {Math.round(((product.price * 1.4 - product.price) / (product.price * 1.4)) * 100)}%
                    </span>
                  </div>

                  <div className="info-tags">
                    <Chip
                      size="small"
                      icon={<LocalShippingIcon />}
                      label="Free Delivery"
                      variant="outlined"
                    />
                    <Chip
                      size="small"
                      icon={<VerifiedIcon />}
                      label="Verified"
                      variant="outlined"
                    />
                  </div>

                  <motion.button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(76, 175, 80, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCartIcon /> Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="view-all-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/shop")}
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "15px 50px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              View All Products
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* ====== CATEGORIES SECTION ====== */}
      <section className="categories-section">
        <Container maxWidth="lg">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>

          <motion.div
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plantCategories.map((category) => (
              <motion.div
                key={category.id}
                className="category-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(76, 175, 80, 0.3)" }}
              >
                <motion.img src={category.image} alt={category.name} whileHover={{ scale: 1.1 }} />
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <motion.button
                    onClick={() => navigate(`/shop?category=${category.slug}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="testimonials-section">
        <Container maxWidth="lg">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>

          <motion.div
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Priya Sharma",
                rating: 5,
                text: "Amazing quality plants! My home looks so green and fresh now. Excellent delivery and packaging!",
                avatar: "👩",
              },
              {
                name: "Rahul Kumar",
                rating: 5,
                text: "Super fast delivery and healthy plants. Customer support is very helpful with care tips.",
                avatar: "👨",
              },
              {
                name: "Anita Patel",
                rating: 4,
                text: "Great variety and competitive prices. The plants are thriving beautifully in my apartment.",
                avatar: "👩‍🦱",
              },
              {
                name: "Vikram Singh",
                rating: 5,
                text: "Best place to buy plants online! Received 3 plants and all are perfectly healthy.",
                avatar: "👨‍💼",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="testimonial-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "star-filled" : ""}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ====== CARE TIPS ====== */}
      <section className="care-tips-section">
        <Container maxWidth="lg">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Plant Care Tips
          </motion.h2>

          <motion.div
            className="tips-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "💧", title: "Watering", desc: "Check soil moisture daily. Water when top inch feels dry." },
              { icon: "☀️", title: "Sunlight", desc: "Most plants need 6-8 hours of indirect sunlight daily." },
              { icon: "🌡️", title: "Temperature", desc: "Keep plants between 65-75°F for optimal growth." },
              { icon: "✨", title: "Humidity", desc: "Mist leaves weekly for tropical and flowering plants." },
            ].map((tip, idx) => (
              <motion.div
                key={idx}
                className="tip-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Green Your Space?</h2>
          <p>Join thousands of happy plant parents and transform your home today!</p>
          <motion.button
            className="cta-btn"
            onClick={() => navigate("/shop")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Shopping Now 🌿
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
