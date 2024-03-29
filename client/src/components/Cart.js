import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = ({ cartProducts, onCheckout }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(
      cartProducts
        .reduce((sum, prod) => sum + prod.quantity * prod.price, 0)
        .toFixed(2)
    );
  }, [cartProducts]);

  const handleCheckout = (e) => {
    e.preventDefault();
    onCheckout();
  };

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <table className='cart-items'>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>

            {cartProducts.map((product, idx) => (
              <CartItem key={product._id + idx} product={product} />
            ))}

            <CartTotal total={cartTotal} />
          </tbody>
        </table>
      )}

      {cartProducts.length === 0 ? (
        <button className='button checkout disabled'>Checkout</button>
      ) : (
        <button className='button checkout' onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
