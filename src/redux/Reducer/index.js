import { USER_DETAILS, USER_LIST, USER_EDIT, USER_DELETE, USER_CREATE } from "../Constant";

const initialState = {
    userList: [],
    userDetails: "",
    createUser:"",
    editedUserDetails:"",
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
                userDetails: payload.data
            }
        case USER_CREATE:
            return {
                ...state,
                createUser: payload.data
            }
        // case USER_EDIT:
        //     return {
        //         ...state,
        //         editedUserDetails: payload.data
        //     }    
        case USER_DELETE:
            console.log("akki dele reducer",payload)
            return {
                ...state,
                userList: payload.data
            }    
       default: return {
          ...state
       }
    }
}

export default reducer;