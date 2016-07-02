export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    item,
  };
}

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export function removeItemFromCart(index) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    index,
  }
}