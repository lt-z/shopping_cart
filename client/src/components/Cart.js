import { useEffect, useContext } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

import { fetchCartProducts, CartProductContext, checkoutCart } from '../context/productCart-context';

const Cart = () => {
  const { cartProducts, dispatch: cartProductsDispatch } = useContext(CartProductContext);

  useEffect(() => {
    fetchCartProducts(cartProductsDispatch)
  }, [cartProductsDispatch])
  
  const cartTotal = cartProducts
    .reduce((sum, prod) => sum + prod.quantity * prod.price, 0)
    .toFixed(2);

  const handleCheckout = (e) => {
    e.preventDefault();
    checkoutCart(cartProductsDispatch)
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
