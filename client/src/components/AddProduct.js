import { useState } from 'react';

const AddProduct = ({ onProductSubmit }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const addFormClass = showAddForm ? 'add-form visible' : 'add-form';
  const toggleForm = () => setShowAddForm(!showAddForm);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }

  const handlePriceChange = (e) => {
    e.preventDefault()
    setPrice(e.target.value)
  }

  const handleQuantityChange = (e) => {
    e.preventDefault()
    setQuantity(e.target.value)
  }

  const handleProductSubmit = (e) => {
    e.preventDefault()
    // setProducts to add on the new product
    // if there is existing producst, we add on to existing producst the current product that we're adding
    // else we only need to add on the existing product
    
    onProductSubmit({title, price, quantity}, resetInputs)
  }

  const resetInputs = (e) => {
    setTitle('')
    setPrice('')
    setQuantity('')
    toggleForm()
  }

  return (
    <div class={addFormClass}>
      <p>
        <a class='button add-product-button' onClick={toggleForm}>
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleProductSubmit}>
        <div class='input-group'>
          <label for='product-name'>Product Name</label>
          <input type='text' id='product-name' onChange={handleTitleChange} value={title} />
        </div>

        <div class='input-group'>
          <label for='product-price'>Price</label>
          <input type='text' id='product-price' onChange={handlePriceChange} value={price} />
        </div>

        <div class='input-group'>
          <label for='product-quantity'>Quantity</label>
          <input type='text' id='product-quantity' onChange={handleQuantityChange} value={quantity} />
        </div>

        <div class='actions form-actions'>
          <button class='button' type='submit'>Add</button>
          <a class='button' onClick={toggleForm}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
