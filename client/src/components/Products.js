import Product from './Product';
import { fetchProducts } from '../features/products/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='product-listing'>
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
