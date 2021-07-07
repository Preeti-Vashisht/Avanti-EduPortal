import axios from "../helpers/axios";
import { authConstants } from "./Constants";

export const login = (user) => {
  let status = 200;
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    // const res = await axios.post("/admin/signin", { ...user });
    let user = {
      firstname: "preeti",
      lastname: "vashisht",
      studentId: "1000",
    };
    if (status == 200) {
      // localStorage.setItem("token", res.data.token);
      localStorage.setItem("token", "preetivashisht");
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token: "preetivashisht", user: user },
      });
    } else {
      console.log("mohit");
      if (status == 400)
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: "error" },
        });
    }
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.SIGNUP_REQUEST,
    });
    const res = await axios.post("/admin/signup", { ...user });

    if (res.status == 201) {
      const { message } = res.data;
      dispatch({
        type: authConstants.SIGNUP_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status == 400)
        dispatch({
          type: authConstants.SIGNUP_FAILURE,
          payload: { error: res.data.error, message: res.data.message },
        });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token: token, user: user },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "failed to login" },
      });
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    // const res = await axios.post("/admin/signout");
    // if (res.status == 200) {
    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS });
    // } else {
    //   dispatch({
    //     type: authConstants.LOGOUT_FAILURE,
    //     payload: { error: res.data.message },
    //   });
    // }
  };
};
