import ProductActionButtons from './ProductActionButtons';

const Product = ({
  product,
  onProductUpdate,
  onProductDelete,
  onAddToCart,
}) => {
  return (
    <div className='product'>
      <div className='product-details'>
        <h3>{product.title}</h3>
        <p className='price'>${product.price}</p>
        <p className='quantity'>{product.quantity} left in stock</p>
        <ProductActionButtons
          product={product}
          onProductUpdate={onProductUpdate}
          onProductDelete={onProductDelete}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
};

export default Product;
