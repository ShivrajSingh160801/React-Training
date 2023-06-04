import { getUsers } from "../../api gateway/api methods/userApi";

export let FetchData = () => {
  return function(dispatch) {
    return getUsers().then(response => {
      console.log('data: ', response.data);
      dispatch({
        type: Item_CRUD.fetch_data,
        payload: response.data
      });
    });
  };
};