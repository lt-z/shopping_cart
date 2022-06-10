export const cartProductsReceived = (cartProducts) => {
  return { type: 'CART_PRODUCTS_RECEIVED', payload: cartProducts };
};

export const cartProductsCheckedOut = () => {
  return { type: 'CART_PRODUCTS_CHECKED_OUT' };
};

export const addToCart = (data) => {
  return { type: 'ADD_TO_CART', payload: data };
};
