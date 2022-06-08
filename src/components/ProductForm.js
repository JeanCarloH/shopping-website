import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const initialForm = {
  id: null,
  nombre: "",
  descripcion: "",
  cantidad: "",
  precio: "",
  categoria: "",
  imagen: "",
};

export default function ProductForm() {
  const { createData } = useOutletContext();

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*if (!form.name || !form.cel) {
      alert("Datos incompletos.");
      return;
    }*/
    createData(form);
    /*if(dataToEdit === null){
        createData(form);
    }else{
        updateData(form);
    }*/

    //handleReset();
  };

  const Input = styled("input")({
    display: "none",
  });
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container textAlign="center">
        <Grid item xs={12} md={12}>
          <h2>Registrar</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="nombre"
            onChange={handleChange}
            required
            label="Nombre"
            value={form.nombre}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="descripcion"
            onChange={handleChange}
            required
            label="Descripción"
            value={form.descripcion}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="cantidad"
            onChange={handleChange}
            required
            type="number"
            label="Cantidad"
            value={form.cantidad}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="precio"
            onChange={handleChange}
            required
            label="Precio"
            value={form.precio}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl sx={{ m: 1, minWidth: 210 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Categoria
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={form.categoria}
              name="categoria"
              onChange={handleChange}
              label="Categoria"
            >
              <MenuItem value={10}>Electrodomesticos</MenuItem>
              <MenuItem value={21}>Ropa</MenuItem>
              <MenuItem value={22}>Vehiculos</MenuItem>
              <MenuItem value={23}>Alimentos</MenuItem>
              <MenuItem value={25}>Mascotas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <label>Subir imagen</label>
          <label htmlFor="icon-button-file">
            <Input
              name="imagen"
              onChange={handleChange}
              accept="image/*"
              id="icon-button-file"
              type="file"
              value={form.imagen}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            endIcon={<SaveIcon />}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
