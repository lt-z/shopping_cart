const CartItem = ({ product }) => {
  return (
    <tr>
      <th>{product.title}</th>
      <th>{product.quantity}</th>
      <th>{product.price}</th>
    </tr>
  );
}
 
export default CartItem;