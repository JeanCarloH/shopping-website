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
      return productInCart
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === productInCart.id
                ? { ...product, cantidadCarrito: product.cantidadCarrito + 1 }
                : product
            ),
        //    ...state,
            //   db: state.db.map((product) =>
             //    product.id === productInCart.id
            //       ? { ...product, cantidadSeleccionada: product.cantidadSeleccionada + 1 }
            //       : product
          //     ),
          }
          
        : {
            ...state,
            cart: [...state.cart, { ...newProduct, cantidadCarrito: 1 }],
           // db: [...state.db, { ...newProduct, cantidaSeleccionada: 1 }],
          };
    }
    case TYPES.ELIMINAR_UNO: {
      return {
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
      };
    }
    case TYPES.ELIMINAR_TODOS: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    }
    case TYPES.LIMPIAR_CARRITO: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}
