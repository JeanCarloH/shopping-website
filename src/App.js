import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import CarritoDeCompra from "./components/CarritoDeCompra";
import Error404 from "./components/Error404";
import Shopping from "./components/Shopping";
import Categoria from "./components/Categoria";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import Login from "./components/Login";
import { productReducer, productInitialState } from "./reducers/productReducer";
import { useReducer,useState } from "react";
import {
  useFirebaseApp
} from 'reactfire';

import { AuthProvider } from "./components/context/authContext";
import { LoginRounded } from "@mui/icons-material";
import { Box, Grid, ImageListItem, Modal } from "@mui/material";
function App() {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (images) => {
    setImages(images);
    setOpen(true);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    maxHeight: "70%",
  };

  const handleClose = () => setOpen(false);

  const [state, dispatch] = useReducer(productReducer, productInitialState);
  return (
    <AuthProvider>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Shopping state={state} dispatch={dispatch} handleOpen={handleOpen} />}>
          <Route
            exact
            path="/carrito-de-compras"
            element={<CarritoDeCompra handleOpen={handleOpen}/>}
          />
          <Route
            exact
            path="/electrodomesticos"
            element={<Categoria categoria={1} nombre="Electrodomesticos" handleOpen={handleOpen}/>}
          />
          <Route
            exact
            path="/ropa"
            element={<Categoria categoria={2} nombre="Ropa" handleOpen={handleOpen}/>}
          />
          <Route
            exact
            path="/vehiculos"
            element={<Categoria categoria={3} nombre="Vehiculos"  handleOpen={handleOpen}/>}
          />
          <Route
            exact
            path="/alimentos"
            element={<Categoria categoria={4} nombre="Alimentos" handleOpen={handleOpen} />}
          />
          <Route
            exact
            path="/mascotas"
            element={<Categoria categoria={5} nombre="Mascotas" handleOpen={handleOpen} />}
          />
          <Route
            exact
            path="/arriendos"
            element={<Categoria categoria={6} nombre="Arriendos" handleOpen={handleOpen}  />}
          />
          <Route
            exact
            path="/otros"
            element={<Categoria categoria={7} nombre="Otros" handleOpen={handleOpen} />}
          />
        </Route>
        <Route exact path="/login" element={<Login /> } >
        </Route>
        <Route exact path="/admin" element={<Admin state={state} dispatch={dispatch} />}>
          <Route exact path="/admin" element={<ProductTable />} />
          <Route exact path="/admin/registrar" element={<ProductForm />} />
          <Route
            exact
            path="/admin/editar/:id"
            element={<ProductForm edit={true} />}
          />
        </Route>
        <Route exact path="*" element={<Error404 />} />
      </Routes>
      <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Grid container spacing={2} justifyContent="center">
                   <Grid item>
                      <ImageListItem
                        sx={{
                          width: { sm: 400, md: 400 },
                          height: { sm: 400, md: 400 },
                        }}
                      >
                        <img src={images} alt={images} />
                      </ImageListItem>
                    </Grid>
                  
                </Grid>
              </Box>
            </Modal>
    </HashRouter>
    </AuthProvider>
  );
}

export default App;
