import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import CarritoDeCompra from "./components/CarritoDeCompra";
import Error404 from "./components/Error404";
import Shopping from "./components/Shopping";
import Categoria from "./components/Categoria";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import Login from "./components/Login";

function App() {
  const arregloImages=["logo/Bienvenidos.png","logo/ropa"]
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Shopping />} image={arregloImages} imagetext="bienvenidos" >
          <Route
            exact
            path="/carrito-de-compras"
            element={<CarritoDeCompra />}
          />
          <Route
            exact
            path="/electrodomesticos"
            element={<Categoria categoria={1} nombre="Electrodomesticos"image="logo/electrodomesticos.png" imagetext="electrodomestico" />}
          />
          <Route
            exact
            path="/ropa"
            element={<Categoria categoria={2} nombre="Ropa" image="logo/ropa.png" imagetext="ropa" />}
          />
          <Route
            exact
            path="/vehiculos"
            element={<Categoria categoria={3} nombre="Vehiculos" image="logo/vehiculos.png" imagetext="vehiculo"  />}
          />
          <Route
            exact
            path="/alimentos"
            element={<Categoria categoria={4} nombre="Alimentos" image="logo/alimentos.png" imagetext="alimento" />}
          />
          <Route
            exact
            path="/mascotas"
            element={<Categoria categoria={5} nombre="Mascotas" image="logo/mascotas.png" imagetext="mascotas" />}
          />
        </Route>
        <Route exact path="/login" element={<Login/> } >
        </Route>
        <Route exact path="/admin" element={<Admin />}>
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
  );
}

export default App;
