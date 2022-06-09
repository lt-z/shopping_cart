import ProductActionButtons from './ProductActionButtons';

const Product = ({
  product
}) => {
  return (
    <div className='product'>
      <div className='product-details'>
        <h3>{product.title}</h3>
        <p className='price'>${product.price}</p>
        <p className='quantity'>{product.quantity} left in stock</p>
        <ProductActionButtons
          product={product}
        />
      </div>
    </div>
  );
};

export default Product;
