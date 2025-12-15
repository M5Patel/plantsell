import React, { useState } from "react";
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
import Logo from "../img/m5plants.jpg";

const pages = ["Home", "Products", "Tips", "Contact"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        height: "80px",
        background: "#FBFDF8",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #e2cfcfd0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ px: "32px" }}>
          
          {/* DESKTOP LOGO */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: "80px",
                width: "150px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </Box>

          {/* MOBILE MENU BUTTON */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: "#154225" }} />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}

              {/* Cart button in mobile */}
              <MenuItem>
                <ShoppingCartIcon sx={{ mr: 1 }} /> Cart
              </MenuItem>
            </Menu>
          </Box>

          {/* MOBILE LOGO */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
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
              <Button
                key={page}
                sx={{
                  color: "#154225",
                  padding: "12px 20px",
                  fontSize: "16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "8px",
                  transition: "0.25s ease",

                  // ⭐ BACKGROUND HOVER (not text hover)
                  "&:hover": {
                    background: "rgba(209, 249, 197, 1)", // light green
                    color: "#00240dff",
                  },
                }}
              >
                {page}
              </Button>
            ))}

            {/* CART BUTTON */}
            <Button
              startIcon={<ShoppingCartIcon />}
              sx={{
                color: "white",
                background: "#4caf50",
                padding: "10px 20px",
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { background: "#43a047" },
              }}
            >
              Cart
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

