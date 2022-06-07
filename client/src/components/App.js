import React, { useState, useEffect } from 'react';
import Shop from './Shop';
import Products from './Products';
import AddProduct from './AddProduct';
import data from '../lib/data';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products', {port: 5001});
      console.log(data);
      setProducts(data);
    }

    fetchProducts()
  }, []);

  const handleProductUpdate = async (updatedProduct) => {
    try {
      const { data } = await axios({
        method: 'put',
        url: `/api/products/${updatedProduct._id}`,
        data: { ...updatedProduct },
        port: 5001,
      })

      setProducts(
        products.map((product) => {
          if (product._id === updatedProduct._id) {
            return updatedProduct
          } else {
            return product
          }
        })
      )
    } catch(e) {
      console.error(e)
    }
  }

  const handleProductSubmit = async (newProduct, callback) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: '/api/products',
        data: { ...newProduct },
        port: 5001,
      })

      setProducts(products.concat(data))
      if (callback) {
        callback();
      }
    } catch(e) {
      console.error(e)
    }
  }

  const handleProductDelete = async (productId) => {
    try {
      await axios({
        method: 'delete',
        url: `/api/products/${productId}`,
        port: 5001,
      })

      setProducts(products.filter(product => product._id !== productId))
    } catch(e) {
      console.error(e)
    }
  }

  const handleAddToCartButton = (id) => {
    // whenthe add to cart button is clicked, then product is added to cart???? 
      // using the product id, find the product 
      // then, add that product into the cartproduct
    const product = products.filter((prod) => prod._id === id)[0];
    console.log(product);
    handleAddProductToCart(product)
  }

  const handleAddProductToCart = (product) => {
    return product;
  }

  return (
    <div>
      <Shop onAddProductToCart={handleAddProductToCart} />
      <main>
        <Products products={products} onProductUpdate={handleProductUpdate} onProductDelete={handleProductDelete} onAddToCart={handleAddToCartButton}/>
        <AddProduct onProductSubmit={handleProductSubmit}/>
      </main>
    </div>
  );
};

export default App;

/*
Day 2 Todos

FROM yesterday
- [x] make the products more re-usable
  - remove edit and turn it into a separate component
- [x] cancel button on the edit form? - pass down the handleCancel behavior

Cart
- [x] fetch products from server using axios
- [ ] add product to cart
  - [x] cart works with dummy data
  - [ ] cart works with real data
- [ ] checkout cart

Product
- [x] add product to producst
  - [x] The product doesn't have IDs ??? Do we mess with server? 
- [x] edit product including connecting to back server
- [x] delete products

*/
