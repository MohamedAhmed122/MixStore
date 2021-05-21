import {ADD_CART_ITEM, REMOVE_CART_ITEM, SET_CART_TO_NULL} from './CartTypes';

export const addItemToCart = item => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const removeItemFromCart = item => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});

export const emptyCart = () => ({
  type: SET_CART_TO_NULL,
});
