import axios from "axios";
import { successMessage, errorMessage } from "./apiResponse";

export const Signup = async (user) => {
  try {
    const response = await axios.post("http://localhost:3001/user/post", user);
    return {
      success: true,
      message: successMessage,
      data: response.data,
    };
  } catch (error) {
    console.error("Error Signing Up:", error);
    return {
      success: false,
      message: errorMessage,
      error: error.message,
    };
  }
};

export const Signin = async (user) => {
  try {
    const response = await axios.post("http://localhost:3001/user/login", user);

    return {
      success: true,
      message: successMessage,
      data: response.data,
    };
  } catch (error) {
    console.error("Error Signing In:", error);
    return {
      success: false,
      message: errorMessage,
      error: error.message,
    };
  }
};
