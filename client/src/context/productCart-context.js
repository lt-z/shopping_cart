import { createContext, useReducer } from "react"
import axios from "axios"

export const CartProductContext = createContext();

const cartProductsReducer = (state, action) => {
  switch(action.type) {
    case "CART_PRODUCTS_RECEIVED": {
      return state.concat(action.payload);
    }
    case "CART_PRODUCTS_CHECKED_OUT": {
      return [];
    }
    case 'ADD_TO_CART': {
      const inCart = state.find(
        (cart) => cart.productId === action.payload.item.productId
      );
      if (!inCart) {
        return state.concat(action.payload.item);
      } else {
        return state.map((cartItem) => {
          if (cartItem.productId === action.payload.item.productId) {
            return action.payload.item;
          } else {
            return cartItem;
          }
        });
      }
    }
    default: {
      return state;
    }
  }
}

export const fetchCartProducts = async (dispatch) => {
  const { data } = await axios.get('/api/cart');
  dispatch({ type: "CART_PRODUCTS_RECEIVED", payload: data });
};

export const addToCartProduct = async (dispatch, data) => {
  dispatch({ type: "ADD_TO_CART", payload: data });
}

export const checkoutCart = async(dispatch) => {
  await axios.post('/api/checkout');
  dispatch({type: "CART_PRODUCTS_CHECKED_OUT"})
}

export const CartProductProvider = ({ children }) => {
  const [cartProducts, dispatch] = useReducer(cartProductsReducer, []);
  return (
  <CartProductContext.Provider value={{ cartProducts, dispatch }}>
		{children}
	</CartProductContext.Provider>
  )
}
