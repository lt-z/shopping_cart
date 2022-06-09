const cartProducts = (state = [], action) => {
  switch(action.type) {
    case "CART_PRODUCTS_RECEIVED": {
      return state.concat(action.payload);
    }
    case "CART_PRODUCTS_CHECKED_OUT": {
      return [];
    }
    case "CART_PRODUCTS_NEW_ITEM_ADDED": {
      return state.concat(action.payload);
    }
    case "CART_PRODUCTS_EXISTING_ITEM_ADDED": {
      return state.map((product) => {
        if (product.productId === action.payload.productId) {
          return action.payload;
        } else {
          return product;
        }
      })
    }
    default: {
      return state;
    }
  }
}

export default cartProducts;