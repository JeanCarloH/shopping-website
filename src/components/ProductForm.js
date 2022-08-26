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
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EnableColorOnDarkAppBar2 from "./EnableColorOnDarkAppBar2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//alerta

import { db2 } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from './context/authContext';

const initialForm = {
  nombre: "",
  celular: "",
  descripcion: "",
  cantidad: "",
  precio: "",
  categoria: "",
  imagenes: {
    img1: { img: "", imgData: null },
    img2: { img: "", imgData: null },
    img3: { img: "", imgData: null },
  },
};

export default function ProductForm({ edit }) {
  const { db, createData, updateData } = useOutletContext();

  const [form, setForm] = useState(initialForm);
  const { id } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);

  const{user,logout}=useAuth() //aca traemos el estado de usecontext

  const add = async (object) => {
    const hola = collection(db2, "product");
    await addDoc(hola, object);
    console.log("nueva tarea guardada");
  };
  const add2 = async (object) => {
    const hola = collection(db2, "product2");
    await addDoc(hola, object);
    console.log("nueva tarea guardada");
  };

  const productos = db.find((item) => item.id == id);
  useEffect(() => {
    if (edit) {
      const product = db.find((item) => item.id == id);
      setForm(product);
    }
  }, []);

  function file(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function (event) {
      
      setForm({
        ...form,
        // imagen: e.target.files[0].name,
        //imagenData: reader.result,
        imagenes: {
          ...form.imagenes,
          [e.target.name]: {
            img: e.target.files[0].name,
            imgData: reader.result,
          },
        },
      });
    };

    reader.readAsDataURL(file);
  }
  
  const temaNuevo = createTheme({
    palette: {
      primary: {
        main: "#1b5e20",
      },
      secondary: {
        main: "#b71c1c",
      },
    },
  });

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
        updateData(id, form);
      } if(user.email=="jeancarlocj14@gmail.com") {
        add(form);
      } if(user.email=="invitadodejean@gmail.com"){
        add2(form);
      }
      handleReset();
    }
  };
  const handleReset = (e) => {
    setForm(initialForm);
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
      <EnableColorOnDarkAppBar2 />
      <Grid container textAlign="center" sx={{ display: "inline-flex" }}>
        <Grid item xs={12} md={12}>
          <h2>Registre su articulo acá</h2>
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
            name="celular"
            onChange={handleChange}
            required
            label="Celular"
            value={form.celular}
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
              <MenuItem value="1">Electrodomesticos</MenuItem>
              <MenuItem value="2">Ropa</MenuItem>
              <MenuItem value="3">Vehiculos</MenuItem>
              <MenuItem value="4">Alimentos</MenuItem>
              <MenuItem value="5">Mascotas</MenuItem>
              <MenuItem value="6">Arriendos</MenuItem>
              <MenuItem value="7">Otros</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          
          <label htmlFor="icon-button-file1">
            Subir imagen
            <Input
              name="img1"
              onChange={file}
              accept="image/*"
              id="icon-button-file1"
              type="file"
            />
            <IconButton
              name="img1"
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>

        <Grid item xs={12} md={3}>
          
          <label htmlFor="icon-button-file2">
            Subir imagen
            <Input
              name="img2"
              onChange={file}
              accept="image/*"
              id="icon-button-file2"
              type="file"
            />
            <IconButton
              name="img2"
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>

        <Grid item xs={12} md={3}>
         
          <label htmlFor="icon-button-file3">
            Subir imagen
            <Input
          
              name="img3"
              onChange={file}
              accept="image/*"
              id="icon-button-file3"
              type="file"
            />
            <IconButton
              name="img3"
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>

        <Grid item md={6} sx={{ display: "block", margin: "auto" }}>
          <img
            src={`${form.imagenes.img1.imgData}`}
            alt={form.imagenes.img1.img}
            height="400"
            width="auto"
          />
        </Grid>

        <Grid item md={6} sx={{ display: "block", margin: "auto" }}>
          <img
            src={`${form.imagenes.img2.imgData}`}
            alt={form.imagenes.img2.img}
            height="400"
            width="auto"
          />
        </Grid>

        <Grid item md={6} sx={{ display: "block", margin: "auto" }}>
          <img
            src={`${form.imagenes.img3.imgData}`}
            alt={form.imagenes.img3.img}
            height="400"
            width="auto"
          />
        </Grid>

        <ThemeProvider theme={temaNuevo}>
          <Grid item xs={12} md={6}>
            <Link to="/admin">
              <Button variant="contained" color="secondary">
                regresar
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
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
        </ThemeProvider>
      </Grid>
    </Box>
  );
}
