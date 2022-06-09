import products from "./products";
import cartProducts from './cartProducts';

const rootReducer = (state = {}, action) => {
  return {
    products: products(state.products, action),
    cartProducts: cartProducts(state.cartProducts, action),
  };
};

export default rootReducer;