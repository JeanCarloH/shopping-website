import { useEffect, useReducer, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { TYPES } from "../actions/productActions";
import { helpHttp } from "../helpers/helpHttp";
import {
  productInitialState,
  productReducer,
} from "../reducers/productReducer";
import MainFeaturedPost from "./MainFeaturedPost";
import Message from "./Message";
import ResponsiveAppBar from "./ResponsiveAppBar";
import StoreProduct from "./StoreProduct";
import { Grid, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
//icons footer
import Footer from "./Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
//pagination
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//
import CloseIcon from '@mui/icons-material/Close';
import Close from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import { db2 } from "./firebase";
import { doc, onSnapshot, collection, query, where,addDoc,updateDoc,setDoc,deleteDoc,getDocs} from "firebase/firestore";
import Publicidad from "./Publicidad";
import { useAuth } from './context/authContext';

import Login from "./Login";


function Shopping({state, dispatch,handleOpen,formPublicidad}) {


  const [error, setError] = useState(null);
  const [foto, setFoto] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const { db, cart } = state;
  const [page, setPage] = React.useState(1);
  const [pageStart, setPageStart] = React.useState(0);
  const [pageEnd, setPageEnd] = React.useState(9);
  const [valueCaptured, setvalueCaptured] = React.useState(1);
  const{user,logout}=useAuth() //aca traemos el estado de usecontext
  let url = "http://localhost:5000/productos";



  
  const social = [
 
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/juan-camilo-mu%C3%B1oz-l%C3%B3pez-ba287b1b4/",
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/jean-carlo-herrera-delgado-24273b207/",
    },
  
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/Juancml1913" },
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/JeanCarloH" },

  ];

  const location = useLocation();

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(210,210,252,.3)",
    '&:hover': {
      backgroundColor: "rgba(0,0,0,.3)",
    },
    marginLeft: 0,
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(3, 0, 3 , 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '158ch',
        '&:focus': {
          width: '158ch',
        },
      },
    },
  }));

  const handlechange=(e)=>{
    setBusqueda(e.target.value)
  
  }
  const handleChange2 = (event, value) => {
    if(value==1){
      setPage(value)
      setvalueCaptured(value)
      setPageStart(0)
      setPageEnd(9)
    }else if(value==2){
      setPage(value)
      setvalueCaptured(value)
      setPageEnd(19)
      setPageStart(10)
      
    }else if(value==3){
      setPage(value)
      setvalueCaptured(value)
      setPageEnd(29)
      setPageStart(20)
      
    }
 
  };

  const handleChange3 =()=>{
    setBusqueda(null);
  }


  useEffect(() => {
  
   getProducts();
   getAdvertisement();
   
  }, []);

 

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db2, "product"));

    if (querySnapshot.docs) {
      dispatch({ type: TYPES.CONSULTAR_PRODUCTO, payload:querySnapshot.docs });
      //setError(null);
    } else {
      dispatch({ type: TYPES.SIN_DATOS });
      //setError();
    }

  }
  
  const getAdvertisement = async () => {
    const querySnapshot = await getDocs(collection(db2, "Advertisement"));
 
    querySnapshot.docs.map(producto=>
      setFoto(producto.data().imagenes.img1.imgData)
      )
  }

  const addProduct = (id) =>{
    dispatch({ type: TYPES.AGREGAR_PRODUCTO, payload: id });
   
   }
    
  
  const deleteOne = (id) => {
    dispatch({ type: TYPES.ELIMINAR_UNO, payload: id });
  
  }


  const deleteAll = (id) =>{
    dispatch({ type: TYPES.ELIMINAR_TODOS, payload: id });
   
  }
   

  const clearCart = () => {
    dispatch({ type: TYPES.LIMPIAR_CARRITO });
    localStorage.removeItem("carrito", JSON.stringify(state.cart));
  }
  //console.log(formPublicidad.ladoBanner)

  return (
    <>
    
      <ResponsiveAppBar numProducts={state.cart.length} />
   
      
    
      

      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {location.pathname == "/" &&
       <Search>
       <SearchIconWrapper>
         <SearchIcon />
       </SearchIconWrapper>
       <StyledInputBase
         placeholder="¿Qué buscas hoy?"
         inputProps={{ "aria-label": "search" }}
         onChange={handlechange}
         value={busqueda}
         autoFocus
       />
        

        {busqueda &&
            <IconButton
            size="large"
            edge="start"
            color="inherit"
          //  aria-label="open drawer"
            sx={{ 
             textAlign:'center'
            }}
            onClick={handleChange3}

          >

          <CloseIcon/>
          </IconButton>
          

        }
      
       
        
     </Search>
     
      }
  
      {location.pathname == "/" ? (
        <Grid container justifyContent="center">
          {busqueda ?

          db.filter((product) => product.nombre.toLowerCase().includes(busqueda.toLowerCase()) ).map((product, index) => (
            <Grid item key={index} xs={12} md={4} lg={3}>
            <StoreProduct
              addProduct={addProduct}
              product={product}
              cart={cart}
              
              />
          </Grid>
          ))
           
         :db.filter((product,index) => (index>=pageStart && index<=pageEnd)).map((product, index) => (
            
            <Grid item key={index} xs={12} md={4} lg={2.4}>
              
              <StoreProduct
                addProduct={addProduct}
                product={product}
                cart={cart}
                handleOpen={handleOpen}
              />
            </Grid>
          ))
          }
        </Grid>
       
      ) : (
        <Outlet
          context={{ db, cart, addProduct, deleteOne, deleteAll, clearCart}}
        />
      )}
  {location.pathname == "/" && (
          <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange2} />
    </Stack>
  )}
    
       <Footer
          title="Gracias por visitar WEBSHOP! "
          description="Este sitio web fue desarrollado con ReactJs"
          social={social}
        />
      
         
    
         

    </>
  );
}

export default Shopping;
