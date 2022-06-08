import Product from './Product';

const Products = ({
  products,
  onProductUpdate,
  onProductDelete,
  onAddToCart,
}) => {
  return (
    <div className='product-listing'>
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
          onProductUpdate={onProductUpdate}
          onProductDelete={onProductDelete}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;
