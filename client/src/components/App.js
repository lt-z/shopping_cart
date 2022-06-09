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
Day 4

- Converting from now to using Redux 

Redux
- Create a store
- create reducers

- [ ] Products 
  - [X] Fetching products in its initial state
  - [x] Handle adding products
  - [x] Handle deleting products
  - [x] Handle editing products
 
- [x] Cart Products
  - [x] fetching the current state of the cart (an unchecked out but filled cart)
  - [x] Adding products to Cart (which involves changing the products state as well as cart state)
  - [x] Handle checking out products (which is essentially deleting from the cart) - we need to test this

- Note: Is it necessary to convert toggle states? 
  - edit products components / toggling showing the edit component?
  - add products form visibiity / uses state on class visivility
*/
