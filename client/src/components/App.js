import React, { useState, useEffect } from 'react';
import Shop from './Shop';
import Products from './Products';
import AddProduct from './AddProduct';
// import data from '../lib/data';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get('/api/cart');

      setCartProducts(data);
    };

    fetchCart();
  }, []);

  const handleProductUpdate = async (updatedProduct) => {
    try {
      await axios.put(`/api/products/${updatedProduct._id}`, {
        ...updatedProduct,
      });

      setProducts(
        products.map((product) => {
          if (product._id === updatedProduct._id) {
            return updatedProduct;
          } else {
            return product;
          }
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleProductSubmit = async (newProduct, callback) => {
    try {
      const { data } = await axios.post('/api/products', { ...newProduct });

      setProducts(products.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleProductDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);

      setProducts(products.filter((product) => product._id !== productId));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCartButton = async (id) => {
    try {
      const { data } = await axios.post('/api/add-to-cart', {
        productId: id,
      });
      const updatedProduct = data.product;
      const cartItem = data.item;

      setProducts(
        products.map((product) => {
          if (product._id === updatedProduct._id) {
            return updatedProduct;
          } else {
            return product;
          }
        })
      );

      if (
        cartProducts.filter((prod) => prod.productId === cartItem.productId)
          .length === 0
      ) {
        setCartProducts(cartProducts.concat(cartItem));
      } else {
        setCartProducts(
          cartProducts.map((product) => {
            if (product.productId === cartItem.productId) {
              return cartItem;
            } else {
              return product;
            }
          })
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.post('/api/checkout');
      setCartProducts([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Shop cartProducts={cartProducts} onCheckout={handleCheckout} />
      <main>
        <Products
          products={products}
          onProductUpdate={handleProductUpdate}
          onProductDelete={handleProductDelete}
          onAddToCart={handleAddToCartButton}
        />
        <AddProduct onProductSubmit={handleProductSubmit} />
      </main>
    </div>
  );
};

export default App;

/*
Day 2 Todos

FROM yesterday
Cart
- [X] add product to cart
  - [x] cart works with real data
  - [x] aggregrate product data
  - [x] Nice to have - refactor the cart logic
- [x] checkout cart
  -  permanently updating the quantity - we need to hit the database with the new quantity
  -  reset the cart to empty


Day 3 Todos
- [x] Finish above
- [x] Testing add product to products
- [] Test shopping cart

*/
