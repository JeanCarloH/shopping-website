import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function CartProduct({
  addProduct,
  deleteOne,
  deleteAll,
  product,
}) {
  return (
    <Card sx={{ m: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={product.imagenData}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Cantidad seleccionada: {product.cantidadCarrito}
        </Typography>
        <Tooltip title="Agregar otro">
       {product.cantidadCarrito < product.cantidad ? <IconButton onClick={() => addProduct(product.id)} color="primary" >
          <AddBoxIcon />
        </IconButton> 
        : <IconButton onClick={() => addProduct(product.id)} color="primary" disabled >
          <AddBoxIcon />
        </IconButton>} 
        </Tooltip>
        <Tooltip title="Eliminar uno">
          <IconButton onClick={() => deleteOne(product.id)} color="primary">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar todos">
          <IconButton onClick={() => deleteAll(product.id)} color="primary">
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
        <Typography gutterBottom variant="h5" component="div">
          {product.nombre}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {product.cantidadCarrito} X {product.precio} = $
          {product.cantidadCarrito * product.precio}.00
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
