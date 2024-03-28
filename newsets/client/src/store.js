import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from '@redux-devtools/extension';
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// const store = configureStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))
// const store = configureStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))
// const store = configureStore({ reducer, middleware, devTools: true });

export default store;
