import { assignmentConstants } from "./Constants";
import { assignments } from "../helpers/assignments";

import axios from "../helpers/axios";

export const getAllAssignment = () => {
  let status = 200;
  return async (dispatch) => {
    dispatch({ type: assignmentConstants.ASSIGNMENT_LIST_REQUEST });

    // const res = await axios.get("/category/getcategories");
    // console.log(res);
    if (status == 200) {
      dispatch({
        type: assignmentConstants.ASSIGNMENT_LIST_SUCCESS,
        payload: { assignment: assignments },
      });
    } else {
      dispatch({
        type: assignmentConstants.ASSIGNMENT_LIST_FAIL,
        payload: { error: "error" },
      });
    }
  };
};

export const submitAssignment = (form) => {
  let status = 200;
  return async (dispatch) => {
    dispatch({ type: assignmentConstants.ASSIGNMENT_SUBMIT_REQUEST });
    // const res = await axios.post("/category/create", form);
    if (status == 200) {
      dispatch({
        type: assignmentConstants.ASSIGNMENT_SUBMIT_SUCCESS,
        payload: { status: true },
      });
    } else {
      dispatch({
        type: assignmentConstants.ASSIGNMENT_SUBMIT_FAIL,
        payload: { error: "error" },
      });
    }
  };
};
