import {
    FormControl,
    Grid,
    InputLabel,
    Select,
    styled,
    MenuItem,
    TextField,
    Input,
    Button,
  } from "@mui/material";
  import { PhotoCamera } from "@mui/icons-material";
  import IconButton from "@mui/material/IconButton";
  import SaveIcon from "@mui/icons-material/Save";
  import { Link } from "react-router-dom";
  import AppBarPublicidad from "./AppBarPublicidad"
  import { useEffect, useState } from "react";
  import { db2 } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
function Publicidad() {

  const initialFormPublicidad= {
    nombre: "",
    ladoBanner: "",
    imagenes: {
      img1: { img: "", imgData: null },
      img2: { img: "", imgData: null },
      img3: { img: "", imgData: null },
      img4: { img: "", imgData: null },
    },
    
  };

   const [formPublicidad, setFormPublicidad] = useState(initialFormPublicidad);

    function file(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        console.log("entré")
        reader.onload = function (event) {
          console.log("x2")
          setFormPublicidad({
              ...formPublicidad,
              // imagen: e.target.files[0].name,
              //imagenData: reader.result,
         
              imagenes: {
                ...formPublicidad.imagenes,
                [e.target.name]: {
                  img: e.target.files[0].name,
                  imgData: reader.result,
                },
              },
            });
          };
         reader.readAsDataURL(file);
      
    }



      
      const Input = styled("input")({
        display: "none",
      });
      const add = async (object) => {
        const hola = collection(db2, "Advertisement");
        await addDoc(hola, object);
        console.log("nueva tarea guardada");
      };
      const handleChange = (e) => {
        e.preventDefault();
        setFormPublicidad({
          ...formPublicidad,
          [e.target.name]: e.target.value,
        });
        // console.log(e.target)
      };
      const handleSubmit = (e) => {
        //e.preventDefault();
        add(formPublicidad)
        }
      


    return (
      <>
      
      <AppBarPublicidad/>
       <Grid container textAlign="center" sx={{ display: "inline-flex" }}>
      <Grid item xs={12} md={12} sx={{textAlign:"center"}}>
      <h2>Pauta publicitaria</h2>
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField
        name="nombre"
        helperText="Por favor ponga el nombre del publicitante"
        id="demo-helper-text-misaligned"
        label="Nombre del autor"
        value={formPublicidad.nombre}
        onChange={handleChange}
      />
      </Grid>
      <Grid item xs={12} md={6} >

          <FormControl sx={{ m: 1, minWidth: 280 }}>
          <InputLabel id="demo-simple-select-autowidth-label"  >
              LadoBanner
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={formPublicidad.ladoBanner}
              name="ladoBanner"
              onChange={handleChange}
              label="Categoria"
            >
              <MenuItem value="1">Lado Izquierdo</MenuItem>
              <MenuItem value="2">Lado Derecho</MenuItem>
              <MenuItem value="3">Arriba</MenuItem>
              <MenuItem value="4">Abajo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          
          <label htmlFor="icon-button-file1">
            Subir imagen Banner izquierdo
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
            Subir imagen Banner derecho
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
            Subir imagen Banner arriba
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

        <Grid item xs={12} md={3}>
          
          <label htmlFor="icon-button-file4">
            Subir imagen Banner abajo
            <Input
              name="img4"
              onChange={file}
              accept="image/*"
              id="icon-button-file4"
             type="file"
            />
            <IconButton
              name="img4"
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
            src={`${formPublicidad.imagenes.img1.imgData}`}
            alt={formPublicidad.imagenes.img1.img}
            height="400"
            width="auto"
          />
        </Grid>

        <Grid item md={6} sx={{ display: "block", margin: "auto" }}>
          <img
            src={`${formPublicidad.imagenes.img2.imgData}`}
            alt={formPublicidad.imagenes.img2.img}
            height="400"
            width="auto"
          />
        </Grid>

        <Grid item md={6} sx={{ display: "block", margin: "auto" }}>
          <img
            src={`${formPublicidad.imagenes.img3.imgData}`}
            alt={formPublicidad.imagenes.img3.img}
            height="400"
            width="auto"
          />
        </Grid>

        <Grid item md={6} sx={{ display: "block", margin: "auto" }}>
          <img
            src={`${formPublicidad.imagenes.img4.imgData}`}
            alt={formPublicidad.imagenes.img4.img}
            height="400"
            width="auto"
          />
        </Grid>

        <Grid item xs={12} md={12} sx={{cursor:"pointer"}}>
            <Link to="/">
              <Button
                onClick={handleSubmit}
                variant="contained"
                endIcon={<SaveIcon />}
                color="success"
                
              >
                guardar
              </Button>
            </Link>
          </Grid>
        </Grid>
        
     
      </>
    );
  }
  
  export default Publicidad;