import EditProduct from './EditProduct';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/products';
import { addToCart } from '../features/cartProducts/cartProducts';

const ProductActionButtons = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartBtn =
    product.quantity === 0
      ? 'button add-to-cart disabled'
      : 'button add-to-cart';
  const btnDisabled = product.quantity === 0 ? true : false;
  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => setShowEdit(!showEdit);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      dispatch(addToCart(product._id));
    } catch (e) {
      console.error(e);
    }
  };

  const handleProductDelete = async (e) => {
    e.preventDefault();
    try {
      dispatch(deleteProduct(product._id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='actions product-actions'>
      <button
        className={addToCartBtn}
        disabled={btnDisabled}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      <button className='button edit' onClick={toggleEdit}>
        Edit
      </button>
      {showEdit && <EditProduct product={product} onCancel={toggleEdit} />}
      <a className='delete-button' onClick={handleProductDelete}>
        <span>X</span>
      </a>
    </div>
  );
};

export default ProductActionButtons;
