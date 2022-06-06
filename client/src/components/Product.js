import { useState } from 'react';

import EditProduct from './EditProduct';

const Product = ({ product }) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => setShowEdit(!showEdit);

  return (
    <div class='product'>
      <div class='product-details'>
        <h3>{product.title}</h3>
        <p class='price'>{product.price}</p>
        <p class='quantity'>{product.quantity} left in stock</p>
        //TODO: Remove from here and make into separate component
        <div class='actions product-actions'>
          <a class='button add-to-cart'>Add to Cart</a>
          <a class='button edit' onClick={toggleEdit}>
            Edit
          </a>
          {showEdit && <EditProduct product={product} />}
        </div>
        <a class='delete-button'>
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
