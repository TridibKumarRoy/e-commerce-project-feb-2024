import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from '@redux-devtools/extension';
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  products: productsReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
