import { useState } from 'react';

const EditProduct = ({product, onCancel, onProductUpdate }) => {
  const [currentTitle, setTitle] = useState(product.title);
  const [currentPrice, setPrice] = useState(product.price);
  const [currentQuantity, setQuantity] = useState(product.quantity);

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

  const handleProductUpdate = (e) => {
    e.preventDefault()
    console.log(product._id)
    onProductUpdate({ _id: product._id, title: currentTitle, price: currentPrice, quantity: currentQuantity});
    onCancel();
  }

  return (
    <div class='edit-form'>
      <h3>Edit Product</h3>
      <form onSubmit={handleProductUpdate}>
        <div class='input-group'>
          <label for='product-name'>Product Name</label>
          <input type='text' id='product-name' onChange={handleTitleChange} value={currentTitle} />
        </div>

        <div class='input-group'>
          <label for='product-price'>Price</label>
          <input type='text' id='product-price' onChange={handlePriceChange} value={currentPrice} />
        </div>

        <div class='input-group'>
          <label for='product-quantity'>Quantity</label>
          <input type='text' id='product-quantity' onChange={handleQuantityChange} value={currentQuantity} />
        </div>

        <div class='actions form-actions'>
          <button type='submit' class='button'>Update</button>
          <a class='button' onClick={onCancel}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
