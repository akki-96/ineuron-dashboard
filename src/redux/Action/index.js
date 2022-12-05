import { USER_LIST, USER_DETAILS, USER_DELETE, USER_CREATE, USER_EDIT } from "../Constant";
import { userList, userDetails, createUserApi} from "../../apiEndPoints"
 
export const  getUserList = (dispatch) => {
  try {
    fetch(userList, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((value) => value.json())
      .then((data) => {
        dispatch({
          type: USER_LIST,
          payload: data,
        }) 
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = (dispatch, userId) => {
  try {
    fetch(`${userDetails}/${userId} `, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((value) => value.json())
    .then((data) => {
      dispatch({
        type: USER_DETAILS,
        payload: data,
      }) 
    })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (dispatch, userId) => {
  try {
    fetch(`${userDetails}/${userId}`, {
     method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((value) => value.json())
      .then((data) => {
        dispatch({
          type: USER_DELETE,
          payload: data,
        }) 
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const editUser = (dispatch, data, userId) => {
  try {
    let bodyContent = {
      method:"PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };
    fetch(`${userDetails}/${userId} `, bodyContent)
      .then((value) => value.json())
      .then((data) => {
        dispatch({
          type: USER_EDIT,
          payload: data,
        }) 
      })
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (dispatch, data) => {
  try {
    let bodyContent = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };
   fetch(createUserApi, bodyContent)
      .then((value) => value.json())
      .then((data) => {
        dispatch({
          type: USER_CREATE,
          payload: data,
        }) 
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
