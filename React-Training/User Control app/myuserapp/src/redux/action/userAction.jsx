import { userActions } from "../actionType";
import { Signup, Signin } from "../../apiOps/userApiMethods";
import { notification } from "antd";

const showSuccessNotification = () => {
  notification.success({
    message: "Login Successful",
    description: "User Logged In Successfully",
    placement:"top"
  });
};

const showErrorNotification = () => {
  notification.error({
    message: "Error",
    description: "Error Logging In",
    placement:"top"
  });
};

// Create Post
export const CreateUser = (userData) => {
  return async function (dispatch) {
    try {
      const response = await Signup(userData);
      if (response?.success === true) {
        dispatch({
          type: userActions.CREATE_USER_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: userActions.CREATE_USER_FAILED,
          payload: "Create User failed.",
        });
      }
    } catch (error) {
      dispatch({
        type: userActions.CREATE_USER_FAILED,
        payload: error,
      });
    }
  };
};

export const CheckUser = (userData) => {
  return async function (dispatch) {
    try {
      const response = await Signin(userData);
      console.log('response: ', response?.data?.data);
      if (response?.data?.data && response?.success === true) {

        localStorage.setItem('token', JSON.stringify(response?.data?.data?.token));
        localStorage.setItem('user', JSON.stringify(response?.data?.data?.GetUser));

        dispatch({
          type: userActions.LOGIN_USER_SUCCESS,
          payload: response.data,
        });
        showSuccessNotification();
      } else {
        dispatch({
          type: userActions.LOGIN_USER_FAILED,
          payload: "User Login failed.",
        });
        showErrorNotification();
      }
    } catch (error) {
      dispatch({
        type: userActions.LOGIN_USER_FAILED,
        payload: error,
      });
      showErrorNotification();
    }
  };
};





