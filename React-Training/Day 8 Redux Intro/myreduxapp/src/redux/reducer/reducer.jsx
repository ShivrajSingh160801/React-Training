import { Item_CRUD } from "../actionType";

export const Reducer = (state,actions) =>{
    switch (actions.type) {
        case Item_CRUD.fetch_data:
            return {
                ...state,
                fetch_data:actions.payload
            }
        default:
            return state
    }
}