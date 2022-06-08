import { TYPES } from "../actions/productActions";
export const productInitialState = {
  db: [],
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
        db: [...state.db, action.payload],
      };
    }
    default:
      return state;
  }
}
