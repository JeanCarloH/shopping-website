import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent, IconButton, Tooltip } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function StoreProduct({ addProduct, product }) {
  return (
    <Card sx={{ m: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://picsum.photos/200/300"
      />
      <CardContent>
        <Tooltip title="Agregar al carrito">
          <IconButton onClick={() => addProduct(product.id)} color="primary">
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
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
  );
}
