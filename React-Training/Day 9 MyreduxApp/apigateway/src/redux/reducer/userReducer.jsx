import { userActions } from "../actionType";
const initialState = {
  fetch_data: [],
};
export const Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case userActions.FETCH_USER_DATA:
      return {
        ...state,
        fetch_data: actions.payload,
      };
    default:
      return state;
  }
};
