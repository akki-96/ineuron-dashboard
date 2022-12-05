import { USER_LIST, USER_DETAILS, USER_DELETE, USER_CREATE } from "../Constant";
import { userList, userDetails } from "../../apiEndPoints"
 
export const  getUserList = (dispatch) => {
  try {
    fetch(userList, {
        method: 'GET',
        headers: {
          'Content-Type':'application/json;charset=utf-8'
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
        'Content-Type':'application/json;charset=utf-8'
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
        'Content-Type':'application/json;charset=utf-8'
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

// export const editUser = () => {
//   try {
//     fetch(userModify)
//       .then((value) => value.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createUser = (dispatch, data) => {
  try {
    let bodyContent = {
      method: "POST",
      headers: {
        'Content-Type':'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
    };
   fetch(`${userDetails}/create`, bodyContent)
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
