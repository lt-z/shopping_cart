import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchCart = createAsyncThunk(
  'cartProducts/fetchCart',
  async () => {
    const { data } = await axios.get('/api/cart');
    return data;
  }
);

export const addToCart = createAsyncThunk(
  'cartProducts/addToCart',
  async (id) => {
    const { data } = await axios.post('/api/add-to-cart', {
      productId: id,
    });
    return data;
  }
);

export const checkoutCart = createAsyncThunk(
  'cartProducts/checkoutCart',
  async () => {
    await axios.post('/api/checkout');
  }
);

const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
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
    });
    builder.addCase(checkoutCart.fulfilled, (state, action) => {
      return [];
    });
  },
});

export default cartProductsSlice.reducer;
