import { useEffect, useReducer, useState } from "react";
import { Outlet } from "react-router-dom";
import { TYPES } from "../actions/productActions";
import { helpHttp } from "../helpers/helpHttp";
import {
  productInitialState,
  productReducer,
} from "../reducers/productReducer";
import MainFeaturedPost from "./MainFeaturedPost";
import Message from "./Message";
import ResponsiveAppBar from "./ResponsiveAppBar";
function Shopping() {
  const [state, dispatch] = useReducer(productReducer, productInitialState);
  const [error, setError] = useState(null);
  const { db, cart } = state;
  let url = "http://localhost:5000/productos";
 
  

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.CONSULTAR_PRODUCTO, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.SIN_DATOS });
          setError(res);
        }
      });
  }, [url]);

  const addProduct = (id) =>
    dispatch({ type: TYPES.AGREGAR_PRODUCTO, payload: id });

  const deleteOne = (id) => dispatch({ type: TYPES.ELIMINAR_UNO, payload: id });

  const deleteAll = (id) =>
    dispatch({ type: TYPES.ELIMINAR_TODOS, payload: id });

  const clearCart = () => dispatch({ type: TYPES.LIMPIAR_CARRITO });

  return (
    <>

      <ResponsiveAppBar numProducts={state.cart.length} />
    
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <Outlet
        context={{ db, cart, addProduct, deleteOne, deleteAll, clearCart}}
      />
    
    </>
  );
}

export default Shopping;
