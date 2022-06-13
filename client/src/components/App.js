import React from 'react';
import Shop from './Shop';
import Products from './Products';
import AddProduct from './AddProduct';

const App = () => {
  return (
    <div id='app'>
      <Shop />
      <main>
        <Products />
        <AddProduct />
      </main>
    </div>
  );
};

export default App;

/*


Implementing React Context

- [ ] products 
  - [x] fetching products
  - [x] adding products
  - [x] deleting products
  - [x] editing producst

- [] cart
  - [x] fetching cart
  - [x] adding products to cart
  - [x] checking out
*/
