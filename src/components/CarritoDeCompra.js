import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useOutletContext, useNavigate} from "react-router-dom";
import CartProduct from "./CartProduct";
import StoreProduct from "./StoreProduct";
function CarritoDeCompra({handleOpen}) {
  const {  addProduct, deleteOne, deleteAll, clearCart,db} =
    useOutletContext();
    const navigate = useNavigate();

  let cart=JSON.parse(localStorage.getItem("carrito"));
  
  const handleSubmit= () => {
    {cart &&
    cart.map((product)=>{
      let productosTotales="";
      let totalPagar=0;
      productosTotales=`
      nombre del producto:+${product.nombre}
      cantidad:+${product.cantidadCarrito}
                                          `
      totalPagar=product.cantidadCarrito* product.precio
      window.open(`https://api.whatsapp.com/send?text=${productosTotales} total a pagar:${totalPagar}&phone=57${product.celular}`,'_blank') 
      
  })}};

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5" align="center">
            Carrito de compras
          </Typography>
          <Button variant="contained" align="center" onClick={clearCart}>
            Limpiar carrito
          </Button>
         { cart &&
           <Button variant="contained" align="left" onClick={handleSubmit}  >
           Comprar
         </Button>
 }
         
        </Grid>
      </Grid>

      {cart && (
        <Grid container justifyContent="center">
          
          {cart.map((product, index) => (
            <Grid item key={index} xs={12} md={4} lg={3}>
              <CartProduct
                deleteOne={deleteOne}
                deleteAll={deleteAll}
                product={product}
                addProduct={addProduct}
                handleOpen={handleOpen}
              />

            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default CarritoDeCompra;
