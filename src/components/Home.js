import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import StoreProduct from "./StoreProduct";

import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import { width } from "@mui/system";

const Home = () =>{
    const [numero, setNumero] = useState(0);
    const arrayimages = ["logo/Bienvenidos.png","logo/ropa.png","logo/alimentos.png"];


    const left = () => {
      if(numero==0){
         let numero=arrayimages.length-1;
        setNumero(numero)
      console.log(numero)
      }else {
        setNumero(numero-1)
        console.log(numero)
      }
    };
    const right = () => {
      if(numero==arrayimages.length-1){
        let numero=0
        setNumero(numero)
        
      }else{
        setNumero(numero+1)
        
      }
    
    };
    return(
        <>
              <ResponsiveAppBar/>
              <Grid sx={{ p:1, display:"flex",justifyContent: "space-between", width:"100%"}}>
     <IconButton sx={{ p:1 }} onClick={left}>
          <ArrowCircleLeftIcon/>
                  </IconButton>
                  
     <IconButton sx={{ p:1 }} onClick={right}>
          <ArrowCircleRightIcon/>
                  </IconButton>
                 
                  </Grid>
                  <MainFeaturedPost  arrayimages={arrayimages} numero={numero} /> 
        </>

     
    );
}

export default Home;