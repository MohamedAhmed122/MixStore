import {combineReducers} from 'redux';
import authReducer from './auth/AuthReducer';
import CartReducer from './cart/CartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: CartReducer,
});

export default rootReducer;
