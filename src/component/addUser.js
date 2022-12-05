import React, { useState } from "react";
import { useDispatch } from "react-redux" 
import { createUser } from "../redux/Action"
import "../app.css";

const AddUser = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    createdAt: ""
  })
  const [validate, setValidate] = useState(false); 
  const firstNameHandler = (e) =>{
    setState({...state, firstName: e.target.value});
    setValidate(false);
  }

  const lastNameHandler = (e) =>{
    setState({...state, lastName: e.target.value})
    setValidate(false);
  }

  const ageNameHandler = (e) =>{
    setState({...state, age: e.target.value})
    setValidate(false);
  }

  const mobileNameHandler = (e) =>{
    setState({...state, mobile: e.target.value})
    setValidate(false);
  }

  const dateNameHandler = (e) =>{
    setState({...state, createdAt: e.target.value})
    setValidate(false);
  }
 
  const _handleResetUser = () =>{
    setState({
      firstName: "",
      lastName: "",
      age: "",
      mobile: "",
      createdAt: ""
    })
  }

  const _addUsersDetails = () =>{
    if(state.firstName != "" && 
      state.lastName != "" && 
      state.age != "" && 
      state.mobile != "" && 
      state.createdAt != ""){
      setValidate(false)
      createUser(dispatch, state);
    } else {
      setValidate(true)
    }
  }

  return (
    <>
      <div className="userHeader">Add User's Details</div>
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
                  <input className="textInput" placeholder="First name" type="text" onChange={firstNameHandler} />
                </span>
              </div>
              <div className="fieldBox">
                <span className="inputField">
                  <input className="textInput" placeholder="Last name" type="text" onChange={lastNameHandler} />
                </span>
              </div>
              <div className="fieldBox">
                <span className="inputField"> 
                  <input  className="textInput" placeholder="Age" type="number" onChange={ageNameHandler} />
                </span>
              </div>
              <div className="fieldBox">
                <span className="inputField">
                  <input  className="textInput" placeholder="Mobile number" type="number" onChange={mobileNameHandler} />
                </span>
              </div>
              <div className="fieldBox">
              <span className="inputField">
                <input  className="textInput" placeholder="Created at " type="date" onChange={dateNameHandler} />
              </span>
              </div>
            </div>
          </div>
          {validate && 
           <div className="validator">All fields are mandatory</div>
          }
          <div className="btnContainer">
            <button className="reset" onClick={_handleResetUser}>Reset</button>
            <button className="edit" onClick={_addUsersDetails}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
