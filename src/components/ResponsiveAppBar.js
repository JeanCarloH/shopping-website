import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";


const pages = [
  {
    "Nombre":"Electrodomesticos",
    "Url":"/electrodomesticos"
  },
  {
    "Nombre":"Ropa",
    "Url":"/ropa"
  },
  {
    "Nombre":"Vehiculos",
    "Url":"/vehiculos"
  },
  {
    "Nombre":"Alimento",
    "Url":"/alimentos"
  },
  {
    "Nombre":"Mascotas",
    "Url":"/mascotas"
  }
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [electrodomestico, setelectrodomestico] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WebShop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                
                <MenuItem key={page.Nombre} onClick={handleOpenUserMenu  }>
                  
                  <Typography textAlign="center">{page.Nombre}</Typography>
                 
                </MenuItem>
                
              ))}
            
            </Menu>
            
          </Box>
          
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WebShop      
          </Typography> 
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.Url}>
              <Button
                key={page.Nombre}
                onClick={handleOpenUserMenu }
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.Nombre}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Carrito de compras">
              <Link to="/carrito-de-compras">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: grey[50] }}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, m: 1 }}>
            <Tooltip title="Administrador">
              <Link to="/admin">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: grey[50], m: 1 }}
                >
                  <SupervisorAccountIcon />
                </IconButton>
              </Link>


            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
