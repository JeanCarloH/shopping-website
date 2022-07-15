import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CartProduct from "./CartProduct";
import StoreProduct from "./StoreProduct";
function CarritoDeCompra() {
  const {  addProduct, deleteOne, deleteAll, clearCart} =
    useOutletContext();
  let productosTotales="";
  let totalPagar=0;
  let cart=JSON.parse(localStorage.getItem("carrito"));
  {cart &&
    cart.map((product,index) =>(
      productosTotales+=`
                        nombre del producto:+${product.nombre}
                        cantidad:+${product.cantidadCarrito}
                                                            `,
      totalPagar+=product.cantidadCarrito* product.precio
      
      
    ))
  }
console.log(productosTotales)
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
         { totalPagar>0 &&
           <Button variant="contained" align="left" a href={`https://api.whatsapp.com/send?text=${productosTotales}total a pagar:${totalPagar}&phone=573004596117`}  target="_blank" >
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
              />

            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default CarritoDeCompra;
