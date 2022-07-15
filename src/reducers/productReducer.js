import { TYPES } from "../actions/productActions";
export const productInitialState = {
  db: [],
  cart: [],
};

export function productReducer(state, action) {
  switch (action.type) {
    case TYPES.CONSULTAR_PRODUCTO: {
      return {
        ...state,
        db: action.payload.map((producto) => producto),
      };
    }
    case TYPES.CREAR_PRODUCTO: {
      return {
        ...state,
        db: [action.payload, ...state.db],
      };
    }
    //Carrito
    case TYPES.AGREGAR_PRODUCTO: {
      let newProduct = state.db.find(  //guarda el ide del action con id de la base de datos para mirar que es el mismo
        (product) => product.id === action.payload
     
      );
      let productInCart = state.cart.find(
        (product) => product.id === newProduct.id
      );
      
      let object=null;
        if(productInCart){
          object= {
            ...state,
            cart: state.cart.map((product) =>
              product.id === productInCart.id
                ? { ...product, cantidadCarrito: product.cantidadCarrito + 1 }
                : product
            ),
    
          }
        }
        
          
        else {
          object= {
            ...state,
            cart: [...state.cart, { ...newProduct, cantidadCarrito: 1 }],
            
          };
        }
       localStorage.setItem("carrito", JSON.stringify(object.cart));
       return object;
        
    }
    case TYPES.ELIMINAR_UNO: {
      let object={
        ...state,
        cart:
          state.cart.filter((product) => product.id === action.payload)[0]
            .cantidadCarrito === 1
            ? state.cart.filter((product) => product.id !== action.payload)
            : state.cart.map((product) =>
                product.id === action.payload
                  ? { ...product, cantidadCarrito: product.cantidadCarrito - 1 }
                  : product
              ),
      }
      localStorage.setItem("carrito", JSON.stringify(object.cart));
      localStorage.getItem("carrito");
      return object;
       
      
    }
    case TYPES.ELIMINAR_TODOS: {
      let object={
          ...state,
          cart: state.cart.filter((product) => product.id !== action.payload),
     }
     localStorage.setItem("carrito", JSON.stringify(object.cart));
     localStorage.getItem("carrito");
      return object;
    }
    case TYPES.LIMPIAR_CARRITO: {
      (localStorage.removeItem("carrito"))
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}
