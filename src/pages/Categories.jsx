import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { plantCategories } from "../data/plantData";
import "../styles/Categories.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Categories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <motion.div
      className="categories-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="categories-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>🌿 Plant Categories</h1>
        <p>Explore our diverse collection of plants</p>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        className="categories-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plantCategories.map((category) => (
          <motion.div
            key={category.id}
            className="category-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/category/${category.slug}`)}
            data-aos="fade-up"
          >
            <motion.div
              className="category-image-wrapper"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay">
                <span className="category-icon">{category.icon}</span>
              </div>
            </motion.div>

            <div className="category-content">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <motion.button
                className="view-btn"
                whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(76, 175, 80, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Categories;
