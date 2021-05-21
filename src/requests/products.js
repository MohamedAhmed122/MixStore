import axios from 'axios';
import {baseUrl} from './config';

export const getProducts = async () => {
  const {data} = await axios.get(`${baseUrl}/products`);
  return data;
};
