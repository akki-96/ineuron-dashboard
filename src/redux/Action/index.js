import {
  userList,
  userCreate,
  userModify,
} from "../../../Components/apiEndpoints";
import { USER_LIST } from "../Constant";

export const getUserList = (dispatch) => {
  try {
    fetch(userList)
      .then((value) => value.json())
      .then((data) => {
        return {
          type: USER_LIST,
          payload: data,
        };
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = () => {
  try {
    fetch(userModify)
      .then((value) => value.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = () => {
  try {
    fetch(userModify)
      .then((value) => value.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const editUser = () => {
  try {
    fetch(userModify)
      .then((value) => value.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const createUser = () => {
  try {
    let data = {
      create: "",
    };
    let bodyContent = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(userCreate, bodyContent)
      .then((value) => value.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
