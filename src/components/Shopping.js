import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
function Shopping() {
  return (
    <>
      <ResponsiveAppBar />
      <h2>Tienda</h2>
      <Outlet />
    </>
  );
}

export default Shopping;
