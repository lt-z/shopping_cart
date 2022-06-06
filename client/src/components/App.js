import React, { useState, useEffect } from 'react';
import Shop from './Shop';
import Products from './Products';
import AddProduct from './AddProduct';
import data from '../lib/data';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <Shop />
      <main>
        <Products products={products} />
        <AddProduct />
      </main>
    </div>
  );
};

export default App;

/*
Components  that we need

- Shop
- Cart 
- Products
  - product (each product) which has add to cart button and edit button

- Add product
  - add product form 
- Edit product 
  - edit form 

*/
