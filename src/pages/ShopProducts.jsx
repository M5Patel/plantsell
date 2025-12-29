import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { plantProducts } from "../data/plantData";
import ProductDetailModal from "../components/ProductDetailModal";
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
  const [priceSort, setPriceSort] = useState("all");

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

    // Sort by price
    if (priceSort === "low-high") {
      products = [...products].sort((a, b) => a.price - b.price);
    } else if (priceSort === "high-low") {
      products = [...products].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(products);
  }, [selectedCategory, searchTerm, priceSort]);

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
        <h1>🌿 Shop Our Plants</h1>
        <p>{filteredProducts.length} products available {searchTerm && `matching "${searchTerm}"`}</p>
      </motion.div>

      {/* Category & Sort Filters */}
      <motion.div
        className="filters-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="category-tabs">
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
        </div>

        <motion.div className="sort-controls">
          <label>Sort by Price:</label>
          <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)}>
            <option value="all">All</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </motion.div>
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
                whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(76, 175, 80, 0.2)" }}
                data-aos="fade-up"
              >
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} className="product-main-img" />
                  <div className="product-overlay">
                    <motion.button
                      className="view-btn"
                      onClick={() => setSelectedProduct(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      👁️ View Details
                    </motion.button>
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
                    🛒 Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="no-products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>🌱 No plants found matching your search!</p>
              <p>Try different keywords or browse all plants</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default ShopProducts;
