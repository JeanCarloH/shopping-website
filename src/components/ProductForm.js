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
import { Margin, PhotoCamera } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EnableColorOnDarkAppBar2 from "./EnableColorOnDarkAppBar2"
import { createTheme,ThemeProvider } from '@mui/material/styles';;


const initialForm = {
  id: null,
  nombre: "",
  descripcion: "",
  cantidad: "",
  precio: "",
  categoria: "",
  imagen: "",
  imagenData: "",
 
};

export default function ProductForm({ edit }) {
  const { db, createData, updateData, setDataToEdit } = useOutletContext();

  const [form, setForm] = useState(initialForm);
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

 
  const productos = db.find((item) => item.id == id);
  useEffect(() => {
    if (edit) {
      const product = db.find((item) => item.id == id);
      setForm(product);
    }
  }, []);

  /*if (edit) {
    const product = db.find((item) => item.id == id);
    setForm(product);
  }*/

  function file(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      setForm({
        ...form,
        imagen: e.target.files[0].name,
        //callback(reader.result);
        imagenData:reader.result
        
      });
    };
  
    reader.readAsDataURL(file);
  }
  const temaNuevo = createTheme({
    palette: {
      primary: {
        main: '#1b5e20',
      },
      secondary: {
        main: '#b71c1c',
      },
    },
  }
  )

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
   // console.log(e.target)
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    if (
      !form.nombre ||
      !form.descripcion ||
      !form.cantidad ||
      !form.precio ||
      !form.categoria
    ) {
      alert("Datos incompletos.");
      return;
    } else {
      if (edit) {
        updateData(form);
        
      } else {
        createData(form);
      }
      handleReset();
    }
  };
    const handleReset = (e) => {
      setForm(initialForm);
      setDataToEdit(null);
    };
    /*if(dataToEdit === null){
        createData(form);
    }else{
        updateData(form);
    }*/

    //handleReset();
  

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
        <EnableColorOnDarkAppBar2 />
      <Grid container textAlign="center">
        <Grid item xs={12} md={12}>
          <h2>Registre su articulo acá</h2>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            name="nombre"
            onChange={handleChange}
            required
            label="Nombre"
            value={form.nombre}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            name="descripcion"
            onChange={handleChange}
            required
            label="Descripción"
            value={form.descripcion}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            name="cantidad"
            onChange={handleChange}
            required
            type="number"
            label="Cantidad"
            value={form.cantidad}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            name="precio"
            onChange={handleChange}
            required
            label="Precio"
            value={form.precio}
          />
        </Grid>
        <Grid item xs={12} md={12}>
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
              <MenuItem value="1">Electrodomesticos</MenuItem>
              <MenuItem value="2">Ropa</MenuItem>
              <MenuItem value="3">Vehiculos</MenuItem>
              <MenuItem value="4">Alimentos</MenuItem>
              <MenuItem value="5">Mascotas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
     
        <Grid item xs={12} md={12}>
       
          <label>Subir imagen</label>
          <label htmlFor="icon-button-file">
            <Input
              name="imagen"
              onChange={file}
              accept="image/*"
              id="icon-button-file"
              type="file"
              //value=
              
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
      <Grid sx  ={{display:"block", margin:"auto"}}> 
      <img src={`${form.imagenData}`} 
                  alt={form.nombre}
                  height="280"
                  margi
                  />
                  </Grid>
          <ThemeProvider theme={temaNuevo}>
        <Grid item xs={12} md={12}>
        <Link to="/admin">
          <Button
            onClick={handleSubmit}
            variant="contained"
            endIcon={<SaveIcon />}
            color="primary"
          >
            guardar
          </Button>
          </Link>
        </Grid>

        <Grid item xs={12} md={12}>
          <Link to="/admin">
            <Button variant="contained"
            color="secondary"
             >
              regresar
              </Button>
          </Link>
        </Grid>
        </ThemeProvider>
      </Grid>
    </Box>
  );
}
