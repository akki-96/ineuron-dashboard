import React from "react";
import "../app.css"

function Card() {

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
   
const usersDetailsHandler = () => {
  return (
    usersDetails.map((item, idx)=>{
      return (
       <div className="cards" key={idx}>
        <div>
          <img className="userIcon" src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0" alt="User Icon"/>
        </div>
        <div>
          <div className="card-details">Name: {item.name}</div>
          <div className="card-details">Age: {item.age}</div>
          <div className="card-details">Phone: {item.phone}</div>
          <div className="card-details">Email: {item.email}</div>
        </div>
      </div>
    )})
  )
}
    
return (
    <div className="card-container">
        {usersDetailsHandler()}
    </div>
  );
}

export default Card;