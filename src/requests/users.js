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



export const editUser = async (token, id, values) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const {data} = await axios.put(`${baseUrl}/users/${id}`,values ,config);
  return data;
};

