// actionTypes.js
export const userActions = {
  FETCH_USER_DATA: "FETCH_USER_DATA",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILED: "FETCH_FAILED",
};

// actions.js
import { getUsers } from "../../api operations/api methods/userApi";
import { userActions } from "../actionTypes";

export const fetchUserData = () => {
  return function (dispatch) {
    return getUsers()
      .then((response) => {
        dispatch({
          type: userActions.FETCH_USER_DATA,
          payload: response.data,
        });
        dispatch(fetchSuccess());
      })
      .catch((error) => {
        dispatch(fetchFailed(error));
      });
  };
};

export const fetchSuccess = () => {
  return {
    type: userActions.FETCH_SUCCESS,
  };
};

export const fetchFailed = (error) => {
  return {
    type: userActions.FETCH_FAILED,
    payload: error,
  };
};

