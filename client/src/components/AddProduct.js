import { useState, useContext } from 'react';
import { addProducts } from '../context/product-context';
import { ProductContext } from '../context/product-context';

const AddProduct = () => {
  const { dispatch: productsDispatch } = useContext(ProductContext);

  const [showAddForm, setShowAddForm] = useState(false);
  const addFormClass = showAddForm ? 'add-form visible' : 'add-form';
  const toggleForm = () => setShowAddForm(!showAddForm);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

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

  const handleProductSubmit = (e) => {
    e.preventDefault();
    addProducts(productsDispatch, { title, price, quantity }, resetInputs)
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
