import EditProduct from './EditProduct';
import { useState } from 'react';

const ProductActionButtons = ({
  product,
  onProductUpdate,
  onProductDelete,
  onAddToCart,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => setShowEdit(!showEdit);

  const handleProductDelete = (e) => {
    e.preventDefault();
    onProductDelete(product._id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(product._id);
  };

  return (
    <div className='actions product-actions'>
      <button className='button add-to-cart' onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button className='button edit' onClick={toggleEdit}>
        Edit
      </button>
      {showEdit && (
        <EditProduct
          product={product}
          onCancel={toggleEdit}
          onProductUpdate={onProductUpdate}
        />
      )}
      <a className='delete-button' onClick={handleProductDelete}>
        <span>X</span>
      </a>
    </div>
  );
};

export default ProductActionButtons;
