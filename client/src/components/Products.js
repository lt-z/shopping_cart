
import Product from './Product';
import { fetchProducts, ProductContext } from '../context/product-context';
import { useEffect, useContext } from 'react';

const Products = () => {
  const { products, dispatch: productsDispatch } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts(productsDispatch);
  }, [productsDispatch]);

  return (
    <div className='product-listing'>
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
