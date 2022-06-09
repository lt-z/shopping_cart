import Cart from './Cart';

const Shop = ({ onCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart onCheckout={onCheckout} />
    </header>
  );
};

export default Shop;
