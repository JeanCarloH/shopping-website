import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import CarritoDeCompra from "./components/CarritoDeCompra";
import Error404 from "./components/Error404";
import Electrodomestico from "./components/Electrodomestico";
import Mascota from "./components/Mascota";
import Ropa from "./components/Ropa";
import Shopping from "./components/Shopping";
import Vehiculo from "./components/Vehiculo";
import Alimento from "./components/Alimento";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Shopping />} /> 
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/carrito-de-compras" element={<CarritoDeCompra />} />
        <Route exact path="/electrodomesticos" element={<Electrodomestico />} />
        <Route exact path="/ropa" element={<Ropa />} />
        <Route exact path="/vehiculos" element={<Vehiculo />} />
        <Route exact path="/alimentos" element={<Alimento/>} />
        <Route exact path="/mascotas" element={<Mascota />} />
        <Route exact path="*" element={<Error404 />} />

        
        

      </Routes>
    </HashRouter>
  );
}

export default App;
