import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// import {persistStore} from 'redux-persist'
import logger from "redux-logger";

import RootReducer from "./rootReducer";

const middleWare = [logger,thunk];

export const store = createStore(RootReducer, applyMiddleware(...middleWare)) 