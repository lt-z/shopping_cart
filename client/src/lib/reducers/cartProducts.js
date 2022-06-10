const cartProducts = (state = [], action) => {
  switch (action.type) {
    case 'CART_PRODUCTS_RECEIVED': {
      return state.concat(action.payload);
    }
    case 'CART_PRODUCTS_CHECKED_OUT': {
      return [];
    }
    case 'ADD_TO_CART': {
      const inCart = state.find(
        (cart) => cart.productId === action.payload.item.productId
      );
      if (!inCart) {
        return state.concat(action.payload.item);
      } else {
        return state.map((cartItem) => {
          if (cartItem.productId === action.payload.item.productId) {
            return action.payload.item;
          } else {
            return cartItem;
          }
        });
      }
    }
    default: {
      return state;
    }
  }
};

export default cartProducts;
