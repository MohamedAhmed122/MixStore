import {SAVE_ORDER_ITEMS} from './OrdersType';

const initialState = {
  orderItems: [],
  success: false,
  error: null,
};

const OrderReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SAVE_ORDER_ITEMS:
      return {
        orderItems: payload,
      };
    default:
      return state;
  }
};
export default OrderReducer;
