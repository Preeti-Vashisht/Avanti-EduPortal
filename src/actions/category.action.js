import { authConstants } from "./Constants";

import axios from "../helpers/axios";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.GET_CATEGORY_REQUEST });

    const res = await axios.get("/category/getcategories");
    console.log(res);
    if (res.status == 200) {
      dispatch({
        type: authConstants.GET_CATEGORY_SUCCESS,
        payload: { category: res.data.category },
      });
    } else {
      dispatch({
        type: authConstants.GET_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.ADD_CATEGORY_REQUEST });
    const res = await axios.post("/category/create", form);
    if (res.status == 201) {
      dispatch({
        type: authConstants.ADD_CATEGORY_SUCCESS,
        payload: { message: res.data.message, category: res.data.category },
      });
    } else {
      dispatch({
        type: authConstants.ADD_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
