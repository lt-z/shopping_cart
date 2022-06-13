import { useState, useContext } from 'react';
import { updateProducts, ProductContext } from '../context/product-context';

const EditProduct = ({ product, onCancel, onProductUpdate }) => {
  const {dispatch: updateProductsDispatch } = useContext(ProductContext);

  const [currentTitle, setTitle] = useState(product.title);
  const [currentPrice, setPrice] = useState(product.price);
  const [currentQuantity, setQuantity] = useState(product.quantity);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const handleProductUpdate = (e) => {
    e.preventDefault();
    updateProducts(updateProductsDispatch, {
      _id: product._id,
      title: currentTitle,
      price: currentPrice,
      quantity: currentQuantity,
    }, product._id)
    onCancel();
  };

  return (
    <div className='edit-form'>
      <h3>Edit Product</h3>
      <form onSubmit={handleProductUpdate}>
        <div className='input-group'>
          <label for='product-name'>Product Name</label>
          <input
            type='text'
            id='product-name'
            onChange={handleTitleChange}
            value={currentTitle}
          />
        </div>

        <div className='input-group'>
          <label for='product-price'>Price</label>
          <input
            type='text'
            id='product-price'
            onChange={handlePriceChange}
            value={currentPrice}
          />
        </div>

        <div className='input-group'>
          <label for='product-quantity'>Quantity</label>
          <input
            type='text'
            id='product-quantity'
            onChange={handleQuantityChange}
            value={currentQuantity}
          />
        </div>

        <div className='actions form-actions'>
          <button type='submit' className='button'>
            Update
          </button>
          <button className='button' type='reset' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
