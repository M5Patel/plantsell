import './App.css';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ShopProducts from './pages/ShopProducts';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
};

function AppContent() {
  const { getTotalItems } = useCart();

  return (
    <>
      <Header cartCount={getTotalItems()} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </motion.div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;

