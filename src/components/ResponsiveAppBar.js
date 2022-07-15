import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import MainFeaturedPost from "./MainFeaturedPost";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import useUser from "./hooks/useUser";

const pages = [
  {
    nombre: "Electrodomesticos",
    url: "/electrodomesticos",
  },
  {
    nombre: "Ropa",
    url: "/ropa",
  },
  {
    nombre: "Vehiculos",
    url: "/vehiculos",
  },
  {
    nombre: "Alimento",
    url: "/alimentos",
  },
  {
    nombre: "Mascotas",
    url: "/mascotas",
  },
];

const mainFeaturedPost = {
  title: "Jean Carlo Herrera Delgado",
  description: "A continuación se podrán ver diferentes cosas personales 🤠.",
  image: "./assets/img/Bienvenidos.png",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const post={
  image:"logo/Bienvenidos.png",
  imagetext:"bienvenida",

}
//const isLogged=true




const ResponsiveAppBar = ({ numProducts }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {isLogged,logout}= useUser()

  const handleClick = e =>{
    e.preventDefault()
    logout()
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#2196f3",
      },
    },
  });

  return (
    <>

    <ThemeProvider theme={darkTheme}>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/">
          <Typography
            variant="h6"
            noWrap
            //component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary",
              textDecoration: "none",
            }}
          >
            WebShopxd
          </Typography>
          </Link>
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
                <Link to={page.url} key={page.nombre}>
                  <MenuItem>
                    <Typography textAlign="center">{page.nombre}</Typography>
                  </MenuItem>
                </Link>
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
            {pages.map((page) => (
              <Link key={page.nombre} to={page.url} >
                <Button
                  key={page.nombre}
                  sx={{ my: 2, color: "white", display: "block"}}
                >
                  {page.nombre}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Carrito de compras">
              <Link to="/carrito-de-compras">
                <Badge badgeContent={numProducts} color="secondary">
                  <IconButton sx={{ p: 0, color: grey[50] }}>
                    <ShoppingCartIcon />
                  </IconButton>
                </Badge>
              </Link>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, m: 1 }}>
            
            <Tooltip title="Administrador">
            <Link to="/admin">
              <IconButton sx={{ p: 0, color: grey[50], m: 1 }}>
                <SupervisorAccountIcon />
              </IconButton>
            </Link>
          </Tooltip>
            
            
            {isLogged ?
              <Tooltip title="Cerrar Sesión">
              <Link to="/">
                <IconButton sx={{ p: 0, color: grey[50], m: 1 }} onClick={handleClick}>
                <LogoutIcon />
                  
                </IconButton>
              </Link>
              </Tooltip>
              :
              <Tooltip title="Iniciar Sesión">
              <Link to="/login">
                <IconButton sx={{ p: 0, color: grey[50], m: 1 }}>
                <LoginIcon />
                </IconButton>
              </Link>
            </Tooltip>
            }
          
          </Box>
        </Toolbar>
      </Container>
     
    </AppBar>
    </ThemeProvider>
    </>
  );
 
  
};

export default ResponsiveAppBar;
