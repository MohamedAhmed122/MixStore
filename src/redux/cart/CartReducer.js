import {ADD_CART_ITEM, REMOVE_CART_ITEM} from './CartTypes';

const initialState = {
  items: [],
};

const CartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_CART_ITEM:
      const newItem = payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        return {
          ...state,
          item: state.items.map(item =>
            item.id === existingItem.id ? newItem : item,
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
      };
    default:
      return state;
  }
};

export default CartReducer;
