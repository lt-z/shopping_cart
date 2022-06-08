import Cart from './Cart';

const Shop = ({ cartProducts, onCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cartProducts={cartProducts} onCheckout={onCheckout} />
    </header>
  );
};

export default Shop;
