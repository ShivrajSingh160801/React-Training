import { userActions } from "../actionType";

const initialState = {
  post_data: [],
  loading: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.CREATE_USER_DATA:
    case userActions.LOGIN_USER_DATA:
    case userActions.FETCH_USER_DATA:
    case userActions.UPDATE_USER_DATA:
    case userActions.DELETE_USER_DATA:
      return {
        ...state,
        loading: true,
      };

    case userActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        create_data: action.payload,
        loading: false,
      };

    case userActions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        login_data: action.payload,
        loading: false,
      };

    case userActions.FETCH_USER_SUCCESS:
      return {
        ...state,
        read_data: action.payload,
        loading: false,
      };

    case userActions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        update_data: action.payload,
        loading: false,
      };

    case userActions.DELETE_USER_SUCCESS:
      return {
        ...state,
        delete_data: action.payload,
        loading: false,
      };

    case userActions.CREATE_USER_FAILED:
    case userActions.LOGIN_USER_FAILED:
    case userActions.FETCH_USER_FAILED:
    case userActions.UPDATE_USER_FAILED:
    case userActions.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
