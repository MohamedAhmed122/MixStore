import {combineReducers} from 'redux';
import authReducer from './auth/AuthReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
