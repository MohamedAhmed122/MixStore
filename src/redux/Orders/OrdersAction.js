import {SAVE_ORDER_ITEMS} from './OrdersType';

export const saveOrderItems = order => ({
  type: SAVE_ORDER_ITEMS,
  payload: order,
});
