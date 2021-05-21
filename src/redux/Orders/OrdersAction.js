import axios from 'axios';
import {baseUrl} from '../config';
import {
  SAVE_ORDER_ITEMS,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  SET_ORDER_TO_NULL,
} from './OrdersType';

export const saveOrderItems = order => ({
  type: SAVE_ORDER_ITEMS,
  payload: order,
});

export const userCreateOrder = (orderItems, shippingAddress) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });

    const {
      auth: {currentUser},
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    };
    console.log(currentUser.token);

    const {data} = await axios.post(
      `${baseUrl}/orders/`,
      {orderItems, shippingAddress},
      config,
    );

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CREATE_ORDER_ERROR,
      payload: message,
    });
  }
};

export const setOrderEmpty = () => ({
  type: SET_ORDER_TO_NULL,
});
