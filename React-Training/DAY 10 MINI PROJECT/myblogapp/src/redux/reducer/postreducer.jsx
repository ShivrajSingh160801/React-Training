import { PostActions } from "../actionType";
const initialState = {
  post_data: [],
};
export const Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case PostActions.CREATE_POST_SUCCESS:
      return {
        ...state,
        post_data: actions.payload,
      };

    case PostActions.FETCH_SUCCESS:
      return {
        ...state,
        get_data: actions.payload,
      };
      
      case PostActions.UPDATE_POST_SUCCESS: 
      return {
        ...state,
        update_data: actions.payload
      }

      case PostActions.DELETE_POST_SUCCESS: 
      return {
        ...state,
        delete_data: actions.payload
      }

    default:
      return state;
  }
};
