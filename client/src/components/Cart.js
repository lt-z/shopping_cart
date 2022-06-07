import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = ({ onAddProductToCart }) => {
  const [cartProducts, setCartProducts] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartTotal(cartProducts.reduce((sum, prod) => sum + (prod.quantity * prod.price), 0).toFixed(2))
  }, [cartProducts])

  const handleAddProductToCart = (e) => {
    e.preventDefault()
    setCartProducts(cartProducts.concat(onAddProductToCart))
    // onAddProductToCart // this guy is expecting an ID? and a callback? 
  }

  return (
    <div class='cart'>
      <h2>Your Cart</h2>
      <table class="cart-items">

        {cartProducts.length === 0 ?
          <p>Your Cart is Empty</p>
        : 
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
         }
        {cartProducts.map(product => 
          < CartItem key={product._id} product={product} />
        )}
        
        <CartTotal total={cartTotal}/>
      </table>
      <a class='button checkout disabled'>Checkout</a>
    </div>
  );
};

export default Cart;


/*

- [x] condition to display cart is empty or cart has products
- state to display cart products


- handle Add to Cart (this is in Product component)
  - if there is more than 0, then you can add to cart
  - else you cannot add to cart
  - total price changes every time we add something to cart
- handle Checkout (what does this do?)
  - permanently updating the quantity 

*/