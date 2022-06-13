import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ProductProvider } from './context/product-context';
import {CartProductProvider} from './context/productCart-context';

ReactDOM.render(
  <React.StrictMode>

    <ProductProvider>
      <CartProductProvider>
        <App />
      </CartProductProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
