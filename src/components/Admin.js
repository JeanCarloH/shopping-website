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
    data.id = Date.now();
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

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData)
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
      
        if (!res.err) {

          dispatch({ type: TYPES.ELIMINAR_PRODUCTO, payload: id });
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  return (
    <>
      <h2></h2>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <Outlet context={{ db, createData, deleteData}} />
    </>
  );
}

export default Admin;
