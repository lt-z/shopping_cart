import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart } from '../cartProducts/cartProducts';
import axios from 'axios';

const initialState = [];

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const { data } = await axios.get('/api/products');
    return data;
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product) => {
    const { data } = await axios.post('/api/products', { ...product });
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    await axios.delete(`/api/products/${id}`);
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (arg) => {
    const { id, updatedProduct } = arg;
    const { data } = await axios.put(`/api/products/${id}`, {
      ...updatedProduct,
    });
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return state.filter((product) => product._id !== action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      return state.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      return state.map((product) =>
        product._id === action.payload.product._id
          ? action.payload.product
          : product
      );
    });
  },
});

export default productsSlice.reducer;
