import Cart from './Cart';

const Shop = ({ onAddProductToCart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart onAddProductToCart={onAddProductToCart}/>
    </header>
  );
};

export default Shop;
