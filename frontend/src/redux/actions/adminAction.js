import * as actionTypes from "../constants/productConstants";
import axios from "axios";

  export const deleteUserFormDb = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.delete(`/api/userAdmin/${id}`);
  
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
  
  export const deleteProductFormDb = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.delete(`/api/productAdmin/${id}`);
  
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
  