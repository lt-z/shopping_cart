import { createContext, useReducer } from "react"
import axios from "axios"

export const ProductContext = createContext();

const productsReducer = (state, action) => {
  switch(action.type) {
    case "PRODUCTS_RECEIVED": {
      return state.concat(action.payload);
    }
    case "PRODUCT_ADDED" : {
      return state.concat(action.payload);
    }
    case "PRODUCT_DELETED" : {
      return state.filter((product) => product._id !== action.payload);
    }
    case "PRODUCT_UPDATED" : {
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      })
    }
    case 'ADD_TO_CART': {
      return state.map((product) =>
        product._id === action.payload.product._id
          ? action.payload.product
          : product
      );
    }
    default: {
      return state;
    }
  }
}

export const fetchProducts = async (dispatch) => {
  const { data } = await axios.get('/api/products');
  dispatch({ type: "PRODUCTS_RECEIVED", payload: data });
};

export const addProducts = async (dispatch, newProduct, callback) => {
  const { data } = await axios.post('/api/products', { ...newProduct });
  dispatch({ type: "PRODUCT_ADDED", payload: data });
  if (callback) {
    callback();
  }
}

export const deleteProducts = async (dispatch, id) => {
  await axios.delete(`/api/products/${id}`);
  dispatch({ type: "PRODUCT_DELETED", payload: id });
}

export const updateProducts = async (dispatch, updatedProduct) => {
  const { data } = await axios.put(`/api/products/${updatedProduct._id}`, {
    ...updatedProduct,
  });
  dispatch({ type: "PRODUCT_UPDATED", payload: data });
}

export const addToCartReduceProductQuant = async(dispatch, data) => {
  dispatch({ type: "ADD_TO_CART", payload: data });
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, []);
  return (
  <ProductContext.Provider value={{ products, dispatch }}>
		{children}
	</ProductContext.Provider>
  )
}
