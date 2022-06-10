import { useEffect } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCart, checkoutCart } from '../features/cartProducts/cartProducts';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);
  const checkoutButton =
    cartProducts.length === 0 ? 'button checkout disabled' : 'button checkout';
  const btnDisabled = cartProducts.length === 0 ? true : false;
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const cartTotal = cartProducts
    .reduce((sum, prod) => sum + prod.quantity * prod.price, 0)
    .toFixed(2);

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      dispatch(checkoutCart());
    } catch (e) {
      console.error(e);
    }
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
      <button
        className={checkoutButton}
        disabled={btnDisabled}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
