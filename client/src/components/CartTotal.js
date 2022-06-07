const CartTotal = ({ total }) => {
  return ( 
    <tr>
      <td colspan="3" class="total">Total: ${total}</td>
    </tr>
   );
}
 
export default CartTotal;