import { authConstants } from "../actions/Constants";
const initialState = {
  user: {
    firstname: "",
    lastname: "",
    studentId: "",
  },
  token: null,
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return { ...state, authenticating: true };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        authenticate: false,
        error: "Failed to Login",
      };
    case authConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case authConstants.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
