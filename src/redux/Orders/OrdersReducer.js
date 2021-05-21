import {
  SAVE_ORDER_ITEMS,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  SET_ORDER_TO_NULL,
} from './OrdersType';

const initialState = {
  orderItems: [],
  success: false,
  loading: false,
  error: null,
};

const OrderReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SAVE_ORDER_ITEMS:
      return {
        orderItems: payload,
      };
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CREATE_ORDER_ERROR:
      return {
        loading: false,
        error: payload,
      };
    case SET_ORDER_TO_NULL:
      return {
        orderItems: [],
        success: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
export default OrderReducer;
