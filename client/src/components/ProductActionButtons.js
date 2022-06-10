import EditProduct from './EditProduct';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { productDeleted } from '../actions/productActions';
import { addToCart } from '../actions/cartProductActions';

const ProductActionButtons = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);

  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => setShowEdit(!showEdit);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/add-to-cart', {
        productId: product._id,
      });

      dispatch(addToCart(data));
    } catch (e) {
      console.error(e);
    }
  };

  const handleProductDelete = async (e) => {
    try {
      await axios.delete(`/api/products/${product._id}`);
      dispatch(productDeleted(product._id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='actions product-actions'>
      <button className='button add-to-cart' onClick={handleAddToCart}>
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
