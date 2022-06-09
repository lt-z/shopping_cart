export const cartProductsReceived = (cartProducts) => {
  return { type: "CART_PRODUCTS_RECEIVED", payload: cartProducts };
}

export const cartProductsCheckedOut = () => {
  return { type: "CART_PRODUCTS_CHECKED_OUT" };
}

export const cartProductsExistingItemAdded = (cartItem) => {
  return { type: "CART_PRODUCTS_EXISTING_ITEM_ADDED", payload: cartItem }
}

export const cartProductsNewItemAdded = (cartItem) => {
  return { type: "CART_PRODUCTS_NEW_ITEM_ADDED", payload: cartItem }
}