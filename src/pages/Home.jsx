import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/Home.css";
import { useCart } from "../context/CartContext";
import p1 from "../img/palm.jpg";
import p2 from "../img/plant1.jpg";
import p3 from "../img/waterwia.jpg";
import q1 from "../img/q1.jpg";
import q2 from "../img/q2.jpg";
import q3 from "../img/q3.jpg";
import q4 from "../img/q4.jpg";
import q5 from "../img/q5.jpg";
import q6 from "../img/q6.jpg";
import Logo from "../img/m5plants.jpg";

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

const products = [
  { id: 1, name: "Areca Palm", image: p1, price: 399, rating: "4.5" },
  { id: 2, name: "Money Plant", image: p2, price: 299, rating: "4.8" },
  { id: 3, name: "Syngonium", image: p3, price: 499, rating: "4.9" },
];

const Home = () => {
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
    return () => AOS.refresh();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <>
      {/* ---------------- SLIDER WITH ANIMATION ---------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Carousel
          fade
          interval={1500}
          controls={true}
          indicators={true}
          pause="hover"
          className="plant-carousel"
        >
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={p1}
              alt="First slide"
            />
            <Carousel.Caption>
              <motion.h2
                className="slide-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Beautiful Indoor Plants
              </motion.h2>
              <motion.p
                className="slide-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bring fresh air and positive vibes to your home.
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={p2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <motion.h2
                className="slide-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Nature in Every Corner
              </motion.h2>
              <motion.p
                className="slide-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Choose from our exclusive green collection.
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={p3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <motion.h2
                className="slide-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Grow Happiness
              </motion.h2>
              <motion.p
                className="slide-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Plants make your home peaceful and calm.
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </motion.div>

      <section className="benefits-section" data-aos="fade-up">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🌿 Why Choose Plants?
          </motion.h2>
          <motion.div
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon">💧</div>
              <h3>Air Purification</h3>
              <p>Remove toxins naturally</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon">☀️</div>
              <h3>Mood Booster</h3>
              <p>Increase happiness levels</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon">❤️</div>
              <h3>Stress Relief</h3>
              <p>Create calming atmosphere</p>
            </motion.div>
            <motion.div className="benefit-card" variants={itemVariants}>
              <div className="benefit-icon">🍃</div>
              <h3>Better Sleep</h3>
              <p>Improve air quality at night</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- PRODUCTS SECTION WITH ANIMATION ---------------- */}
    <motion.div
      className="products-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="hh1"
        data-aos="zoom-in"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ⭐Products Section⭐
      </motion.h1>

      <motion.div
        className="produc"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="product-card" variants={itemVariants}>
          <motion.div
            className="img-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={q1} alt="Best Selling Pack" />
          </motion.div>
          <h3>Best Selling Pack</h3>
          <p>Get 50% off on our most popular plants</p>
        </motion.div>

        <motion.div className="product-card" variants={itemVariants}>
          <motion.div
            className="img-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={q2} alt="Top Rated Collection" />
          </motion.div>
          <h3>Top Rated Collection</h3>
          <p>Get 40% off on customer favorites</p>
        </motion.div>

        <motion.div className="product-card" variants={itemVariants}>
          <motion.div
            className="img-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={q3} alt="New Arrivals" />
          </motion.div>
          <h3>New Arrivals</h3>
          <p>Flat 25% off on fresh arrivals</p>
        </motion.div>

        <motion.div className="product-card" variants={itemVariants}>
          <motion.div
            className="img-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={q4} alt="Trending Plants" />
          </motion.div>
          <h3>Trending Plants</h3>
          <p>BOGO Offer on trending plants</p>
        </motion.div>
      </motion.div>
    </motion.div>

{/* PARALLAX IMG  */}

<div className="parent">
  <div className="parallax"></div>
</div>

      {/* WHY US */}
      <section className="why-us-section" data-aos="fade-up">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ✨ Why Choose Us?
          </motion.h2>

          <motion.div
            className="why-us-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="why-us-card" variants={itemVariants}>
              <div className="why-icon">🌱</div>
              <h3>Quality Guaranteed</h3>
              <p>100% healthy plants</p>
            </motion.div>

            <motion.div className="why-us-card" variants={itemVariants}>
              <div className="why-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Within 3–5 days</p>
            </motion.div>

            <motion.div className="why-us-card" variants={itemVariants}>
              <div className="why-icon">📘</div>
              <h3>Expert Care Tips</h3>
              <p>Free guidance included</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PLANTS WITH CART */}
      <section className="featured-section" data-aos="fade-up">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🌱 Featured Plants
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our best-selling plants with amazing quality
          </motion.p>

          <motion.div
            className="plants-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="plant-card custom-plant-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="plant-image">
                  <img src={product.image} className="img-default" alt={product.name} />
                  <img src={p2} className="img-hover" alt={product.name} />
                </div>
                <div className="plant-info">
                  <h3>{product.name}</h3>
                  <div className="rating">⭐⭐⭐⭐</div>
                  <span className="price">₹{product.price}</span>
                </div>
                <motion.button
                  className="add-btn hover-add-btn"
                  whileHover={{ scale: 1.05, backgroundColor: "#45a049" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(product)}
                >
                  🛒 Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section" data-aos="fade-up">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          💬 What Our Customers Say
        </motion.h2>
        <motion.div
          className="reviews-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="review-card" variants={itemVariants}>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Best quality plants! My home feels so fresh now."</p>
            <h4>- Priya Sharma</h4>
          </motion.div>
          <motion.div className="review-card" variants={itemVariants}>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Fast delivery and healthy plants. Highly recommend!"</p>
            <h4>- Rahul Verma</h4>
          </motion.div>
          <motion.div className="review-card" variants={itemVariants}>
            <div className="stars">⭐⭐⭐⭐</div>
            <p>"Great customer service and beautiful packaging."</p>
            <h4>- Anita Patel</h4>
          </motion.div>
        </motion.div>
      </section>

      {/* CARE TIPS */}
      <motion.div
        className="care-tips"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🌿 Plant Care Tips
        </motion.h2>

        <motion.div
          className="tips-flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="tip-card" variants={itemVariants}>
            <div className="tip-image">
              <img src={p1} alt="" />
            </div>
            <h3>Watering Wisdom</h3>
            <p>Check soil moisture regularly.</p>
          </motion.div>

          <motion.div className="tip-card" variants={itemVariants}>
            <div className="tip-image">
              <img src={p3} alt="" />
            </div>
            <h3>Light Requirements</h3>
            <p>Bright, indirect light is ideal.</p>
          </motion.div>

          <motion.div className="tip-card" variants={itemVariants}>
            <div className="tip-image">
              <img src={p2} alt="" />
            </div>
            <h3>Humidity Levels</h3>
            <p>Use humidifier for tropical plants.</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <section className="cta-section" data-aos="zoom-in">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Green Your Space? 🌿
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Start your plant journey and transform your home!
        </motion.p>
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.08, boxShadow: "0 8px 25px rgba(76, 175, 80, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Browse Collection
        </motion.button>
      </section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">

          <div className="footer-logo">
            <img src={Logo} alt="Plants Logo" />
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/">🏡 Home</a>
            <a href="/">🪴 Shop Plants</a>
            <a href="/">🌿 Plant Care</a>
            <a href="/">📖 About Us</a>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <a href="/">🚚 Shipping Info</a>
            <a href="/">↩️ Returns Policy</a>
            <a href="/">❓ FAQ</a>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <a href="/">📧 m5plants@plantshop.com</a>
            <a href="/">📞 +91 9876543210</a>
            <p>📍 Green Street, Plant City</p>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2025 Plant Shop. All rights reserved.</p>
        </div>
      </motion.footer>

    </>
  );
};

export default Home;
