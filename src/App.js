import React, { useState } from "react";
import Header from "./component/header";
import Card from "./component/card";
function App() {
  let usersDetails = [
    {   
      id: 1,
      name: "Akhilesh Singh",
      age: 25,
      phone: 9198212072,
      email: "akhileshsin97@gmail.com"
    },
    {   
      id: 2,
      name: "Mukul Prasad",
      age: 24,
      phone: 9198223323,
      email: "mukulp@gmail.com"
    },
    {   
      id: 3,
      name: "Ravi Gandu",
      age: 26,
      phone: 7905145708,
      email: "ganduravi@gmail.com"
    },
    {   
      id: 4,
      name: "Amarjeet Yadav",
      age: 23,
      phone: 7905141512,
      email: "yadavamar@gmail.com"
    },
    {   
      id: 5,
      name: "Jayesh Kumar",
      age: 26,
      phone: 8793793749,
      email: "jayeshkumar@gmail.com"
    },
    {   
      id: 6,
      name: "Gaurav Yadav",
      age: 26,
      phone: 8900212072,
      email: "gauravyadav@gmail.com"
    },
    {   
      id: 7,
      name: "Dharmendra Kanaujiya",
      age: 22,
      phone: 9198343333,
      email: "dharmendra@gmail.com"
    },
    {   
      id: 8,
      name: "Sanjay Gupta",
      age: 26,
      phone: 637890733,
      email: "sanjay@gmail.com"
    }
  ] 
  const [searchedDetails, setSearchDetails] = useState(usersDetails);

  const searchUserDetails = (e) => {
    let searchedData = usersDetails.filter((item) => {
        return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(e.target.value)
    })
    if(e.target.value !== ""){
      setSearchDetails(searchedData);
    } else {
      setSearchDetails(usersDetails);
    }
  }

  const handleSorting = () =>{

  }
  
  const handleFilter = () =>{
    
  }

  return (
    <div className="App">
      <Header searchUserDetails={searchUserDetails}/>
      <Card
       usersDetails={searchedDetails}
       handleFilter={handleFilter}
       handleSorting={handleSorting}
       />
    </div>
  );
}

export default App;
