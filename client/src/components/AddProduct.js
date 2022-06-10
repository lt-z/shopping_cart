import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProduct } from '../features/products/products';

const AddProduct = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const addFormClass = showAddForm ? 'add-form visible' : 'add-form';
  const toggleForm = () => setShowAddForm(!showAddForm);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const dispatch = useDispatch();
  const newProduct = { title, price, quantity };

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

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(addProduct(newProduct));
      resetInputs();
    } catch (e) {
      console.error(e);
    }
  };

  const resetInputs = (e) => {
    setTitle('');
    setPrice('');
    setQuantity('');
    toggleForm();
  };

  return (
    <div id='test' className={addFormClass}>
      <p>
        <button className='button add-product-button' onClick={toggleForm}>
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleProductSubmit}>
        <div className='input-group'>
          <label htmlFor='product-name'>Product Name</label>
          <input
            type='text'
            id='product-name'
            onChange={handleTitleChange}
            value={title}
          />
        </div>

        <div className='input-group'>
          <label htmlFor='product-price'>Price</label>
          <input
            type='text'
            id='product-price'
            onChange={handlePriceChange}
            value={price}
          />
        </div>

        <div className='input-group'>
          <label htmlFor='product-quantity'>Quantity</label>
          <input
            type='text'
            id='product-quantity'
            onChange={handleQuantityChange}
            value={quantity}
          />
        </div>

        <div className='actions form-actions'>
          <button className='button' type='submit'>
            Add
          </button>
          <button className='button' type='reset' onClick={toggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
