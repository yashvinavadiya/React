import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState("");

  const handleMenuOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuType("");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://portotheme.com/html/porto_ecommerce/assets/images/logo-black.png"  // 👈 your uploaded logo file
            alt="Porto Logo"
            style={{ height: 40 }}
          />
        </Box>

        {/* Center Menu */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button sx={{ color: "black" }}>HOME</Button>
          <Button
            sx={{ color: "black" }}
            endIcon={<ExpandMoreIcon />}
            onClick={(e) => handleMenuOpen(e, "categories")}
          >
            CATEGORIES
          </Button>
          <Button
            sx={{ color: "black" }}
            endIcon={<ExpandMoreIcon />}
            onClick={(e) => handleMenuOpen(e, "products")}
          >
            PRODUCTS
          </Button>
          <Button
            sx={{ color: "black" }}
            endIcon={<ExpandMoreIcon />}
            onClick={(e) => handleMenuOpen(e, "pages")}
          >
            PAGES
          </Button>
          <Button sx={{ color: "black" }}>BLOG</Button>
          <Button sx={{ color: "black", fontWeight: "bold" }}>BUY PORTO!</Button>
        </Box>

        {/* Right Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <ShoppingBagOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>

      {/* Dropdown Menus */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {menuType === "categories" && (
          <>
            <MenuItem onClick={handleMenuClose}>Men</MenuItem>
            <MenuItem onClick={handleMenuClose}>Women</MenuItem>
            <MenuItem onClick={handleMenuClose}>Kids</MenuItem>
          </>
        )}
        {menuType === "products" && (
          <>
            <MenuItem onClick={handleMenuClose}>New Arrivals</MenuItem>
            <MenuItem onClick={handleMenuClose}>Best Sellers</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sale</MenuItem>
          </>
        )}
        {menuType === "pages" && (
          <>
            <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
          </>
        )}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
