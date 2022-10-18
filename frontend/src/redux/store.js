import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";
import { deleteUserReducer } from "./reducers/userReducers";
import { getUsersReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getUsers:getUsersReducer,
  deleteUser:deleteUserReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];



const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
