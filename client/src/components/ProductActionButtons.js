import EditProduct from './EditProduct';
import axios from "axios";
import { useState, useContext } from 'react';
import { addToCartReduceProductQuant, deleteProducts, ProductContext } from '../context/product-context';
import { addToCartProduct, CartProductContext } from '../context/productCart-context';

const ProductActionButtons = ({
  product,
}) => {
  const { dispatch: cartProductsDispatch } = useContext(CartProductContext)
  const { dispatch: productsDispatch } = useContext(ProductContext);

  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => setShowEdit(!showEdit);

  const handleProductDelete = (e) => {
    e.preventDefault();
    deleteProducts(productsDispatch, product._id);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/add-to-cart', {
      productId: product._id,
    });
    addToCartProduct(cartProductsDispatch, data);
    addToCartReduceProductQuant(productsDispatch, data);
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
        />
      )}
      <a className='delete-button' onClick={handleProductDelete}>
        <span>X</span>
      </a>
    </div>
  );
};

export default ProductActionButtons;
