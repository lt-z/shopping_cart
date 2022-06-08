const CartItem = ({ product }) => {
  return (
    <tr>
      <th>{product.title}</th>
      <th>{product.quantity}</th>
      <th>${product.price.toFixed(2)}</th>
    </tr>
  );
};

export default CartItem;
