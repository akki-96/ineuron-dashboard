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
                createUser: payload.data,
                userList: [payload.data, ...state.userList]
            }
        case USER_EDIT: {
            const {userList} = state;
            const filteredData = userList.filter((item) =>item._id != payload.data._id);
            return {
                ...state,
                userList: [...filteredData, payload.data]
            } 
        }
              
        case USER_DELETE: {
            const {userList} = state;
            const filteredData = userList.filter((item) =>item._id != payload.data._id);
            return {
                ...state,
                userList: filteredData
            }   
        }
            
       default: return {
          ...state
       }
    }
}

export default reducer;