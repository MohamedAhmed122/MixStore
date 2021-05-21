import {ADD_CART_ITEM, REMOVE_CART_ITEM, SET_CART_TO_NULL} from './CartTypes';

const initialState = {
  items: [],
};

const CartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_CART_ITEM:
      const newItem = payload;
      console.log(newItem, 'new Item');
      const existingItem = state.items.find(item => item._id === newItem._id);
      if (existingItem) {
        return {
          ...state,
          item: state.items.map(item =>
            item._id === existingItem._id ? newItem : item,
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
        items: state.items.filter(item => item._id !== payload._id),
      };
    case SET_CART_TO_NULL:
      return {items: []};
    default:
      return state;
  }
};

export default CartReducer;
