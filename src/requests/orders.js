import axios from 'axios';
import {baseUrl} from './config';

export const getMyOrders = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const {data} = await axios.get(`${baseUrl}/orders/myOrders`, config);
  return data;
};


export const getAllOrders = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const {data} = await axios.get(`${baseUrl}/orders`, config);
  return data;
};
