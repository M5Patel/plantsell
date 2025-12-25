import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Logo from "../img/m5plants.jpg";

const pages = ["Home", "Products", "Tips", "Contact"];

const navVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { type: "spring", stiffness: 300 } },
};

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Header({ cartCount = 0 }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
          height: "80px",
          background: "linear-gradient(135deg, #FBFDF8 0%, #f0f9f1 100%)",
          boxShadow: "0 4px 20px rgba(76, 175, 80, 0.1)",
          borderBottom: "2px solid #d1f9c5",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ px: "32px", height: "80px" }}>
            {/* DESKTOP LOGO */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={logoVariants}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                <motion.img
                  src={Logo}
                  alt="Logo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    height: "80px",
                    width: "150px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton onClick={handleOpenNavMenu}>
                  <MenuIcon sx={{ color: "#154225", fontSize: "28px" }} />
                </IconButton>
              </motion.div>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <motion.div
                    key={page}
                    whileHover={{ backgroundColor: "#d1f9c5" }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography>{page}</Typography>
                    </MenuItem>
                  </motion.div>
                ))}

                {/* Cart button in mobile */}
                <motion.div whileHover={{ backgroundColor: "#d1f9c5" }}>
                  <MenuItem>
                    <Badge badgeContent={cartCount} color="error">
                      <ShoppingCartIcon sx={{ mr: 1 }} />
                    </Badge>
                    <span style={{ marginLeft: "8px" }}>Cart</span>
                  </MenuItem>
                </motion.div>
              </Menu>
            </Box>

            {/* MOBILE LOGO */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <motion.img
                src={Logo}
                alt="Logo"
                whileHover={{ scale: 1.05 }}
                style={{
                  height: "60px",
                  width: "150px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* DESKTOP NAVIGATION */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <motion.div
                  key={page}
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Button
                    sx={{
                      color: "#154225",
                      padding: "12px 20px",
                      fontSize: "16px",
                      fontWeight: 500,
                      textTransform: "none",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",

                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "0",
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "rgba(209, 249, 197, 0.3)",
                        transition: "left 0.3s ease",
                        zIndex: "-1",
                      },

                      "&:hover::before": {
                        left: "0",
                      },

                      "&:hover": {
                        color: "#00240dff",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </motion.div>
              ))}

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
                    boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #45a049 0%, #3d8b40 100%)",
                      boxShadow: "0 6px 20px rgba(76, 175, 80, 0.4)",
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

          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}

