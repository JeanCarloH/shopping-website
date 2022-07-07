import { Grid, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import StoreProduct from "./StoreProduct";

function Categoria({ nombre, categoria }) {
  const { db, addProduct } = useOutletContext();
  const products = db.filter((product) => product.categoria == categoria);

  return (
    <>
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
