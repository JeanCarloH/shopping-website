import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent, IconButton, Tooltip } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HoverRating from "./HoverRating";
import CardActionArea from "@mui/material/CardActionArea";

export default function StoreProduct({ cart, addProduct, product,handleOpen }) {
  //la tarjeta
  const cartProduct = cart.find((item) => item.id == product.id);
  return (
    <>
    
    <Card sx={{ m: 2 }}>
      <CardMedia
        component="img"
        alt={product.imagen}
        height="280"
        src={product.imagenData}
        onClick={() => handleOpen(product.imagenData)}
      />
     
      <CardContent>
       
          <Tooltip title="Agregar al carrito">
            
          
              <IconButton
                onClick={() => addProduct(product.id)}
                color="primary"
               disabled= {( cartProduct ?
                 (cartProduct.cantidadCarrito < product.cantidad ? false:true) 
                  :
                  false
               )
               }
                
              >
                <AddBoxIcon />
              </IconButton>
            
          </Tooltip>
          <HoverRating/>
        <Typography gutterBottom variant="h5" component="div">
          {cartProduct ? cartProduct.cantidadCarrito : 0}
        </Typography>
        {cartProduct && (
          <Typography variant="h6" color="text.secondary">
            {cartProduct.cantidadCarrito} X {product.precio} = ${" "}
            {cartProduct.cantidadCarrito * product.precio}.00
          </Typography>
        )}

        <Typography gutterBottom variant="h5" component="div">
          {product.nombre}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          ${product.precio}.00
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad disponible: {product.cantidad}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.descripcion}
        </Typography>
      </CardContent>
    </Card>
   
    </>
  );
}
