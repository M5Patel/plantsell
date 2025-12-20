import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../pages/Home.css";
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

const Home = () => {
  return (
    <>
      {/* ---------------- SLIDER ---------------- */}
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
            <h2 className="slide-title">Beautiful Indoor Plants</h2>
            <p className="slide-text">
              Bring fresh air and positive vibes to your home.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={p2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="slide-title">Nature in Every Corner</h2>
            <p className="slide-text">
              Choose from our exclusive green collection.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={p3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="slide-title">Grow Happiness</h2>
            <p className="slide-text">
              Plants make your home peaceful and calm.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">🌿 Why Choose Plants?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💧</div>
              <h3>Air Purification</h3>
              <p>Remove toxins naturally</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">☀️</div>
              <h3>Mood Booster</h3>
              <p>Increase happiness levels</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <h3>Stress Relief</h3>
              <p>Create calming atmosphere</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🍃</div>
              <h3>Better Sleep</h3>
              <p>Improve air quality at night</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS SECTION ---------------- */}
    <div className="products-section">
  <h1 className="hh1">⭐Products Section⭐</h1>

  <div className="produc">
    <div className="product-card">
      <div className="img-box">
        <img src={q1} alt="Best Selling Pack" />
      </div>
      <h3>Best Selling Pack</h3>
      <p>Get 50% off on our most popular plants</p>
    </div>

    <div className="product-card">
      <div className="img-box">
        <img src={q2} alt="Top Rated Collection" />
      </div>
      <h3>Top Rated Collection</h3>
      <p>Get 40% off on customer favorites</p>
    </div>

    <div className="product-card">
      <div className="img-box">
        <img src={q3} alt="New Arrivals" />
      </div>
      <h3>New Arrivals</h3>
      <p>Flat 25% off on fresh arrivals</p>
    </div>

    <div className="product-card">
      <div className="img-box">
        <img src={q4} alt="Trending Plants" />
      </div>
      <h3>Trending Plants</h3>
      <p>BOGO Offer on trending plants</p>
    </div>
  </div>
</div>

{/* ---------------- Parllax img  ---------------- */}

<div className="parent">
  <div className="parallax"></div>
</div>

      {/* ---------------- WHY US ---------------- */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">✨ Why Choose Us?</h2>

          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-icon">🌱</div>
              <h3>Quality Guaranteed</h3>
              <p>100% healthy plants</p>
            </div>

            <div className="why-us-card">
              <div className="why-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Within 3–5 days</p>
            </div>

            <div className="why-us-card">
              <div className="why-icon">📘</div>
              <h3>Expert Care Tips</h3>
              <p>Free guidance included</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PLANTS ---------------- */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">🌱 Featured Plants</h2>
          <p className="section-subtitle">
            Discover our best-selling plants with amazing quality
          </p>

          <div className="plants-grid">
            {/* 1 */}
            <div className="plant-card custom-plant-card">
              <div className="plant-image">
                <img src={p1} className="img-default" alt="" />
                <img src={p2} className="img-hover" alt="" />
              </div>
              <div className="plant-info">
                <h3>Areca Palm</h3>
                <div className="rating">⭐⭐⭐⭐</div>
                <span className="price">₹399</span>
              </div>
              <button className="add-btn hover-add-btn">Add to Cart</button>
            </div>

            {/* 2 */}
            <div className="plant-card custom-plant-card">
              <div className="plant-image">
                <img src={p2} className="img-default" alt="" />
                <img src={p3} className="img-hover" alt="" />
              </div>
              <div className="plant-info">
                <h3>Money Plant</h3>
                <div className="rating">⭐⭐⭐⭐⭐</div>
                <span className="price">₹299</span>
              </div>
              <button className="add-btn hover-add-btn">Add to Cart</button>
            </div>

            {/* 3 */}
            <div className="plant-card custom-plant-card">
              <div className="plant-image">
                <img src={p3} className="img-default" alt="" />
                <img src={p1} className="img-hover" alt="" />
              </div>
              <div className="plant-info">
                <h3>Syngonium</h3>
                <div className="rating">⭐⭐⭐⭐⭐</div>
                <span className="price">₹499</span>
              </div>
              <button className="add-btn hover-add-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- REVIEWS ---------------- */}
      <section className="reviews-section">
        <h2 className="section-title">💬 What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Best quality plants! My home feels so fresh now."</p>
            <h4>- Priya Sharma</h4>
          </div>
          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Fast delivery and healthy plants. Highly recommend!"</p>
            <h4>- Rahul Verma</h4>
          </div>
          <div className="review-card">
            <div className="stars">⭐⭐⭐⭐</div>
            <p>"Great customer service and beautiful packaging."</p>
            <h4>- Anita Patel</h4>
          </div>
        </div>
      </section>

      {/* ---------------- CARE TIPS ---------------- */}
      <div className="care-tips">
        <h2>🌿 Plant Care Tips</h2>

        <div className="tips-flex">
          <div className="tip-card">
            <div className="tip-image">
              <img src={p1} alt="" />
            </div>
            <h3>Watering Wisdom</h3>
            <p>Check soil moisture regularly.</p>
          </div>

          <div className="tip-card">
            <div className="tip-image">
              <img src={p3} alt="" />
            </div>
            <h3>Light Requirements</h3>
            <p>Bright, indirect light is ideal.</p>
          </div>

          <div className="tip-card">
            <div className="tip-image">
              <img src={p2} alt="" />
            </div>
            <h3>Humidity Levels</h3>
            <p>Use humidifier for tropical plants.</p>
          </div>
        </div>
      </div>

      {/* ---------------- CTA ---------------- */}
      <section className="cta-section">
        <h2>Ready to Green Your Space? 🌿</h2>
        <p>Start your plant journey and transform your home!</p>
        <button className="cta-btn">Browse Collection</button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer>
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
</footer>

    </>
  );
};

export default Home;
