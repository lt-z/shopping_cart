import ProductActionButtons from './ProductActionButtons'

const Product = ({ product, onProductUpdate, onProductDelete, onAddToCart }) => {
  return (
    <div class='product'>
      <div class='product-details'>
        <h3>{product.title}</h3>
        <p class='price'>{product.price}</p>
        <p class='quantity'>{product.quantity} left in stock</p>
        <ProductActionButtons product={product} onProductUpdate={onProductUpdate} onProductDelete={onProductDelete} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default Product;
