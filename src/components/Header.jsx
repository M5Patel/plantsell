import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Logo from "../img/m5plants.jpg";

const pages = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
];

const navVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

export default function Header({ cartCount = 0 }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setSearchOpen(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: "auto",
          background: "linear-gradient(135deg, #ffffff 0%, #f0f9f1 100%)",
          boxShadow: "0 4px 20px rgba(76, 175, 80, 0.12)",
          borderBottom: "2px solid #d1f9c5",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 2, px: { xs: 1, md: 4 } }}>
            {/* DESKTOP LOGO */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={logoVariants}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <motion.img
                    src={Logo}
                    alt="M5 Plants"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      height: "70px",
                      width: "auto",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </Box>
            </motion.div>

            {/* SPACER */}
            <Box sx={{ flexGrow: 1 }} />

            {/* DESKTOP NAVIGATION & SEARCH */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
              {pages.map((page) => (
                <motion.div
                  key={page.name}
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Button
                    component={Link}
                    to={page.path}
                    sx={{
                      color: "#154225",
                      padding: "10px 16px",
                      fontSize: "15px",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "6px",
                      transition: "all 0.3s ease",
                      position: "relative",
                      textDecoration: "none",

                      "&:hover": {
                        color: "#4caf50",
                        backgroundColor: "rgba(76, 175, 80, 0.1)",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </motion.div>
              ))}

              {/* SEARCH BAR */}
              {searchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <TextField
                    autoFocus
                    size="small"
                    placeholder="Search plants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleSearch}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        fontSize: "14px",
                        color: "#154225",
                        "& fieldset": { borderColor: "#d1f9c5" },
                        "&:hover fieldset": { borderColor: "#4caf50" },
                        "&.Mui-focused fieldset": { borderColor: "#4caf50" },
                      },
                    }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => setSearchOpen(false)}
                    sx={{ ml: 1, color: "#154225" }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </motion.div>
              ) : (
                <IconButton
                  onClick={() => setSearchOpen(true)}
                  sx={{ color: "#154225" }}
                >
                  <SearchIcon />
                </IconButton>
              )}

              {/* CART BUTTON */}
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
              >
                <Button
                  startIcon={
                    <Badge badgeContent={cartCount} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  }
                  sx={{
                    color: "white",
                    background: "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #45a049 0%, #3d8b40 100%)",
                      boxShadow: "0 6px 16px rgba(76, 175, 80, 0.4)",
                      transform: "translateY(-2px)",
                    },
                  }}
                  component={Link}
                  to="/cart"
                >
                  Cart
                </Button>
              </motion.div>
            </Box>

            {/* MOBILE MENU */}
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1, alignItems: "center" }}>
              {/* Mobile Search */}
              <IconButton
                onClick={() => setSearchOpen(!searchOpen)}
                sx={{ color: "#154225" }}
              >
                <SearchIcon />
              </IconButton>

              {/* Mobile Cart */}
              <IconButton
                onClick={() => handleNavClick("/cart")}
                sx={{ color: "#154225" }}
              >
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              {/* Mobile Menu Button */}
              <IconButton onClick={handleOpenNavMenu} sx={{ color: "#154225" }}>
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleNavClick(page.path)}
                    sx={{ color: "#154225" }}
                  >
                    {page.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* MOBILE LOGO */}
            <Box sx={{ display: { xs: "flex", md: "none" }, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <motion.img
                  src={Logo}
                  alt="M5 Plants"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    height: "50px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}

