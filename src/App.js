import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import CarritoDeCompra from "./components/CarritoDeCompra";
import Error404 from "./components/Error404";
import Shopping from "./components/Shopping";
import Categoria from "./components/Categoria";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Shopping />}>
          <Route
            exact
            path="/carrito-de-compras"
            element={<CarritoDeCompra />}
          />
          <Route
            exact
            path="/electrodomesticos"
            element={<Categoria nombre="Electrodomesticos" />}
          />
          <Route exact path="/ropa" element={<Categoria nombre="Ropa" />} />
          <Route
            exact
            path="/vehiculos"
            element={<Categoria nombre="Vehiculos" />}
          />
          <Route
            exact
            path="/alimentos"
            element={<Categoria nombre="Alimentos" />}
          />
          <Route
            exact
            path="/mascotas"
            element={<Categoria nombre="Mascotas" />}
          />
        </Route>
        <Route exact path="/admin" element={<Admin />}>
          <Route exact path="/admin" element={<ProductTable />} />
          <Route exact path="/admin/registrar" element={<ProductForm />} />
        </Route>
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
