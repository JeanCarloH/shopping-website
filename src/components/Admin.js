import { helpHttp } from "../helpers/helpHttp";
import { useEffect, useReducer, useState,useParams } from "react";
import { TYPES } from "../actions/productActions";
import {
  productInitialState,
  productReducer,
} from "../reducers/productReducer";
import Message from "./Message";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import ProductForm from "./ProductForm";
import BasicAlerts from "./BasicAlerts";
import { getDocs} from "firebase/firestore";
import { db2 } from "./firebase";
import { doc, onSnapshot, collection, query, where,addDoc,updateDoc,setDoc,deleteDoc} from "firebase/firestore";


function Admin() {
  const [state, dispatch] = useReducer(productReducer, productInitialState);
  const { db } = state;
  const [edit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  
  let api = helpHttp();
  let url = "http://localhost:5000/productos";

  useEffect(() => {
    setLoading(true);

       getProducts();
        setLoading(false);
        
     
  }, []);

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db2, "product"));

    if (querySnapshot.docs) {
      dispatch({ type: TYPES.CONSULTAR_PRODUCTO, payload:querySnapshot.docs });
      //setError(null);
    } else {
      dispatch({ type: TYPES.SIN_DATOS });
      //setError();
    }

  }

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
        setVerify(true);
      } else {
        setError(res);
        setVerify(false);
      }
    });
  };
  
  const updateData = async(id,data) => {
    await updateDoc(doc(db2,'product',id),{
      cantidad:data.cantidad,
      categoria:data.categoria,
      descripcion:data.descripcion,
      imagen:data.imagen,
      imagenData:data.imagenData,
      nombre:data.nombre,
      precio:data.precio,
      celular:data.celular,
    })
    console.log(id)
    
  };

  const deleteData = async(id) => {
   const eliminar= await deleteDoc(doc(db2, 'product', id));
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

        if (eliminar) {

          dispatch({ type: TYPES.ELIMINAR_PRODUCTO, payload: id });
        } 
    
  };
  const verificador=() => {setVerify(false)}

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

    
      <Outlet context={{ db, createData, deleteData, updateData, verify, verificador}} />
      
    </>
  );
}

export default Admin;
