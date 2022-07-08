import { Grid, Typography } from "@mui/material";
import { useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import StoreProduct from "./StoreProduct";
import MainFeaturedPost from "./MainFeaturedPost";

function Categoria({ nombre, categoria,image,imagetext }) {
  const { cart, db, addProduct } = useOutletContext();
  const products = db.filter((product) => product.categoria == categoria);

const post={
  image:image,
  imagetext:imagetext,

}

  return (
    <>
      <MainFeaturedPost post={post}/>
      <Typography variant="h5" align="center">
        Categoria: {nombre}
      </Typography>
      {products && (
        <Grid container justifyContent="center">
          {products.map((product, index) => (
            <Grid item key={index} xs={12} md={4} lg={3}>
              <StoreProduct addProduct={addProduct} product={product} />
            </Grid>
          ))}
      
        </Grid>
      )}
      
    </>
  );
}

export default Categoria;
