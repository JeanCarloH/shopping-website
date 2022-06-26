import { Button, Grid, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import CartProduct from "./CartProduct";

function CarritoDeCompra() {
  const { cart, addProduct, deleteOne, deleteAll, clearCart } =
    useOutletContext();
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
