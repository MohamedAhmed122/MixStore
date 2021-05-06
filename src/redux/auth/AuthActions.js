import {USER_LOGIN, USER_LOGOUT, USER_REGISTER} from './AuthTypes';

export const userLogin = values => ({
  type: USER_LOGIN,
  payload: values,
});

export const userRegister = values => ({
  type: USER_REGISTER,
  payload: values,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
