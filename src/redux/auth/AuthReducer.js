import {USER_LOGIN, USER_LOGOUT, USER_REGISTER} from './AuthTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGIN:
      return {
        isAuthenticated: true,
        user: payload,
      };
    case USER_REGISTER:
      return {
        isAuthenticated: true,
        user: payload,
      };

    case USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
