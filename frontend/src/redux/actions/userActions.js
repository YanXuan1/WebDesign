import * as actionTypes from "../constants/productConstants";
import axios from "axios";


export const registerFormDb = (registerData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.post(`/api/regist`,registerData);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const longinFormDb = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.post(`/api/regist`,loginData);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("/api/userAdmin");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

