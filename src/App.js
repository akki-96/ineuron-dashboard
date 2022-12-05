import React, { useState, useEffect } from "react";
import Header from "./component/header";
import Card from "./component/card";
import { useDispatch, useSelector } from "react-redux" 
import { getUserList, getUserDetails, deleteUser}  from "./redux/Action"
import SpecificUserDetails from "./component/specificUserDetails"
import store from "./redux/Store";
import AddUser from "./component/addUser";

function App() {
  const dispatch = useDispatch();

  const store = useSelector((store)=> store);

  useEffect(()=> {
    getUserList(dispatch);
  }, [store.userList]);

  const userList = store.userList;
  const userDetails = store.userDetails;

  const [flag, setFlag] = useState(false);
  const [searchedDetails, setSearchDetails] = useState(!flag ? store.userList : []);

  const handleUserDetails = (userId) => {
    getUserDetails(dispatch,userId);
  }  
 
  const handleDeleteUser = (userId) => {
    deleteUser(dispatch, userId);
  }

  const searchUserDetails = (searchString) => {
    let searchedData = userList.filter((item) => {
        return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchString)
    })
    if(searchString !== "") {
      setSearchDetails(searchedData);
    } else {
      setSearchDetails(userList);
    }
  }

  const handleSorting = (selectedOption) => {
    let sortedData;
    if(selectedOption === "fiterBy") {
      setFlag(true);
      setSearchDetails(userList);
    } else if(selectedOption === "sortName") {
      sortedData = userList.sort((a,b)=>a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1);
      setFlag(true);
      setSearchDetails(sortedData);
    } else if(selectedOption === "byAge") {
      sortedData = userList.sort((a,b)=>a.age > b.age ? 1 : -1);
      setFlag(true);
      setSearchDetails(sortedData);
    }
  }
  
  const handleFilter = (selectedOption) => {
    let filterData;
    if(selectedOption === "sortBy") {
      setFlag(true);
      setSearchDetails(userList);
    } else if(selectedOption === "ageAbove18") {
      filterData = userList.filter((item)=> item.age >= 18);
      setFlag(true)
      setSearchDetails(filterData);
    } else if(selectedOption === "ageBelow18") {
      filterData = userList.filter((item)=> item.age < 18);
      setFlag(true);
      setSearchDetails(filterData);
    }
  }

  return (
    <div className="App">
        <Header 
          searchUserDetails={searchUserDetails}
          handleFilter={handleFilter}
          handleSorting={handleSorting}
        />
        <Card
          userList={userList}
          handleUserDetails={handleUserDetails}
          handleDeleteUser={handleDeleteUser}
        />
        {/* <SpecificUserDetails /> */}
      <AddUser />
    </div>
  );
}

export default App;
