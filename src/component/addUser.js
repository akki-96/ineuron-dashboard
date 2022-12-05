import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, editUser } from "../redux/Action";
import "../app.css";
import { Link, redirect, useNavigate} from "react-router-dom";

const AddUser = (props) => {
  if(props.isEdit){
    var {
      firstName, 
      lastName ,
      age,
      phoneNumber,
      createdAt,
      _id
    } = props.userDetails
  }
  const history = useNavigate()
  const dispatch = useDispatch();
  const [state, setState] = useState({
    firstName:  "",
    lastName: "",
    age: "",
    mobile: "",
    createdAt: "",
  });

  useEffect(() => {
    setState({
      firstName: props.isEdit ? firstName : "",
      lastName: props.isEdit ? lastName : "",
      age: props.isEdit ? age : "",
      mobile: props.isEdit ? phoneNumber : "",
      createdAt: props.isEdit ? new Date(createdAt).toLocaleDateString() : "",
    })
  }, [props.userDetails])

  const [validate, setValidate] = useState(false);

  const firstNameHandler = (e) => {
    setState({ ...state, firstName: e.target.value });
    setValidate(false);
  };

  const lastNameHandler = (e) => {
    setState({ ...state, lastName: e.target.value });
    setValidate(false);
  };

  const ageNameHandler = (e) => {
    setState({ ...state, age: e.target.value });
    setValidate(false);
  };

  const mobileNameHandler = (e) => {
    setState({ ...state, mobile: e.target.value });
    setValidate(false);
  };

  const dateNameHandler = (e) => {
    setState({ ...state, createdAt: createdDate(e.target.value) });
    setValidate(false);
  };

  const _handleResetUser = () => {
    setState({
      firstName: "",
      lastName: "",
      age: "",
      mobile: "",
      createdAt: "",
    });
  };

  const _addUsersDetails = () => {
    if (
      state.firstName != "" &&
      state.lastName != "" &&
      state.age != "" &&
      state.mobile != "" &&
      state.createdAt != ""
    ) {
      setValidate(false);
      createUser(dispatch, state);
      history('/');
    } else {
      setValidate(true);
    }
  };

  const _updateUserDetails = () => {
    if (
      state.firstName != "" &&
      state.lastName != "" &&
      state.age != "" &&
      state.mobile != "" &&
      state.createdAt != ""
    ) {
      setValidate(false);
      editUser(dispatch, state, _id);
       history('/');
      
    } else {
      setValidate(true);
    }
  }

  const createdDate = (date) =>{
    let updatedDate = new Date(date).toLocaleDateString().split("/").reverse();
    updatedDate[1] = updatedDate[1] < 10 ? "0" + updatedDate[1] : updatedDate[1];
    return updatedDate.join("-");
  }

  return (
    <>
      <div className="userHeader">
        <Link to="/">
         <img className="backIcon" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" />
        </Link>
          {props.isEdit 
           ? "Update User's Details" 
           : "Add User's Details"
          }
        <div></div>
      </div>
      <div>
        <div className="detailsContainer">
          <div className="addUserContainer">
            <div>
              <img
                className="userIcon"
                src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"
                alt="User Icon"
              />
            </div>
            <div className="inputBoxContainer">
              <div className="fieldBox">
                <span className="inputField">
                  <span className="label">First name : </span>
                  <input
                    className="textInput"
                    placeholder="First name"
                    type="text"
                    value={state.firstName}
                    onChange={firstNameHandler}
                  />
                </span>
              </div>
              <div className="fieldBox">
                <span className="inputField">
                <span className="label">Last name : </span>
                  <input
                    className="textInput"
                    placeholder="Last name"
                    type="text"
                    value={state.lastName}
                    onChange={lastNameHandler}
                  />
                </span>
              </div>
              <div className="fieldBox">
                <span className="inputField">
                <span className="label">Age : </span>
                  <input
                    className="textInput"
                    placeholder="Age"
                    type="number"
                    value={state.age}
                    onChange={ageNameHandler}
                  />
                </span>
              </div>
              <div className="fieldBox">
                <span className="inputField">
                  <span className="label">Mobile : </span>
                  <input
                    className="textInput"
                    placeholder="Mobile number"
                    type="number"
                    value={state.mobile}
                    onChange={mobileNameHandler}
                  />
                </span>
              </div>
              <div className="fieldBox">
                <span className="inputField">
                <span className="label">Created date : </span>
                  <input
                    className="textInput"
                    placeholder="Created at "
                    type="date"
                    value={createdDate(state.createdAt)}
                    onChange={dateNameHandler}
                  />
                </span>
              </div>
            </div>
          </div>
          {validate && (
            <div className="validator">All fields are mandatory</div>
          )}
          <div className="btnContainer">
            <button className="reset" onClick={_handleResetUser}>
              Reset
            </button>
            <button className="edit" onClick={props.isEdit ? _updateUserDetails :_addUsersDetails}>
              {props.isEdit ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
