import { helpHttp } from "../helpers/helpHttp";
import { useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/productActions";
import {
  productInitialState,
  productReducer,
} from "../reducers/productReducer";
import Message from "./Message";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";

function Admin() {
  const [state, dispatch] = useReducer(productReducer, productInitialState);
  const { db } = state;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let api = helpHttp();
  let url = "http://localhost:5000/productos";

  useEffect(() => {
    setLoading(true);
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

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREAR_PRODUCTO, payload: res });
        setError(null);
      } else {
        setError(res);
      }
    });
  };
  return (
    <>
      <h2>componente de Admin</h2>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <Outlet context={{ db, createData }} />
    </>
  );
}

export default Admin;
