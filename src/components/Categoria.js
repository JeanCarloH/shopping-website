import { Grid, Typography } from "@mui/material";
import { useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import StoreProduct from "./StoreProduct";
import MainFeaturedPost from "./MainFeaturedPost";
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import { width } from "@mui/system";

function Categoria({ nombre, categoria,image,imagetext }) {
  const { cart, db, addProduct } = useOutletContext();
  const products = db.filter((product) => product.categoria == categoria);
  const [numero, setNumero] = useState(0);  
  
const post={

  image:image,
  imagetext:imagetext,

}

const arrayimages = ["logo/Bienvenidos.png","/logo/home2.png","logo/electrodomesticos.png","logo/ropa.png","/logo/vehiculos.png","logo/alimentos.png","/logo/mascotas.png"];


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

  return (
    <>
                 <Grid sx={{ p:1, display:"flex",justifyContent: "space-between", width:"100%"}}>
     <IconButton sx={{ p:1 }} onClick={left}>
          <ArrowCircleLeftIcon/>
                  </IconButton>
                  <MainFeaturedPost post={post} arrayimages={arrayimages} numero={numero} /> 
     <IconButton sx={{ p:1 }} onClick={right}>
          <ArrowCircleRightIcon/>
                  </IconButton>
                 
                  </Grid>
     
    
      
      <Typography variant="h5" align="center">
        Categoria: {nombre}
      </Typography>
     
      {products && (
        <Grid container justifyContent="center">
          {products.map((product, index) => (
            <Grid item key={index} xs={12} md={4} lg={3}>
              <StoreProduct addProduct={addProduct} product={product} cart={cart}/>
            </Grid>
          ))}
      
        </Grid>
      )}
  
      
    </>
  );
}

export default Categoria;
