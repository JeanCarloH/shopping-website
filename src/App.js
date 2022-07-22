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
import { useReducer } from "react";
import {
  useFirebaseApp
} from 'reactfire';

import { AuthProvider } from "./components/context/authContext";
import { LoginRounded } from "@mui/icons-material";

function App() {
  

  const [state, dispatch] = useReducer(productReducer, productInitialState);
  return (
    <AuthProvider>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Shopping state={state} dispatch={dispatch}  />}>
          <Route
            exact
            path="/carrito-de-compras"
            element={<CarritoDeCompra />}
          />
          <Route
            exact
            path="/electrodomesticos"
            element={<Categoria categoria={1} nombre="Electrodomesticos" />}
          />
          <Route
            exact
            path="/ropa"
            element={<Categoria categoria={2} nombre="Ropa" />}
          />
          <Route
            exact
            path="/vehiculos"
            element={<Categoria categoria={3} nombre="Vehiculos"  />}
          />
          <Route
            exact
            path="/alimentos"
            element={<Categoria categoria={4} nombre="Alimentos"  />}
          />
          <Route
            exact
            path="/mascotas"
            element={<Categoria categoria={5} nombre="Mascotas"  />}
          />
          <Route
            exact
            path="/arriendos"
            element={<Categoria categoria={6} nombre="Arriendos"  />}
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
    </HashRouter>
    </AuthProvider>
  );
}

export default App;
