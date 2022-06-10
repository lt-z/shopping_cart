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
Day 5
- Updating yesterday's syntax to use Redux toolkit and Redux thunk 

- [ ] Products 
  - [ ] Fetching products in its initial state
  - [ ] Handle adding products
  - [ ] Handle deleting products
  - [ ] Handle editing products
 
- [ ] Cart Products
  - [ ] fetching the current state of the cart (an unchecked out but filled cart)
  - [ ] Adding products to Cart (which involves changing the products state as well as cart state)
  - [ ] Handle checking out products (which is essentially deleting from the cart) - we need to test this

- Note: Is it necessary to convert toggle states? 
  - edit products components / toggling showing the edit component?
  - add products form visibiity / uses state on class visivility
*/
