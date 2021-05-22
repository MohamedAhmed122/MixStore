import axios from 'axios';
import {baseUrl} from './config';

export const getAllUsers = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const {data} = await axios.get(`${baseUrl}/users`, config);
  return data;
};

