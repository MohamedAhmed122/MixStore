import {combineReducers} from 'redux';
import authReducer from './auth/AuthReducer';
import CartReducer from './cart/CartReducer';
import OrderReducer from './Orders/OrdersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: CartReducer,
  order: OrderReducer,
});

export default rootReducer;
