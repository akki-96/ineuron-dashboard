import { USER_DETAILS, USER_LIST } from "../Constant";

const initialState = {
    userList: [],
    userDetais: "",
    isLoading: false
}

const reducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch ( type ) {
        case USER_LIST:
            return {
                ...state,
                userList: payload.data
            }
        case USER_DETAILS:
            return {
                ...state,
                userDetais: payload.data
            }
    }
}

export default reducer;