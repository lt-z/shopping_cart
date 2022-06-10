import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/products';
import cartProductsReducer from '../features/cartProducts/cartProducts';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartProducts: cartProductsReducer,
  },
});

export default store;
