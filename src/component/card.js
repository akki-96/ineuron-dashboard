import React from "react";
import "../app.css" 

function Card(props) {

const usersDetailsHandler = () => {
  return (
    props.userList && 
    props.userList.length > 0 && 
    props.userList.map((item)=>{
      return (
       <div className="cards" key={item._id} onClick={()=>props.handleUserDetails(item._id)}>
        <div>
          <img className="userIcon" src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0" alt="User Icon"/>
        </div>
        <div>
          <div className="card-details">Name: {item.firstName}{" "}{item.lastName}</div>
          <div className="card-details">Age: {item.age}</div>
          <div className="card-details">Phone: {item.phoneNumber}</div>
          <div className="card-details">Created at: {item.createdAt}</div>
          <div className="card-details">Updated at: {item.updatedAt}</div>
        </div>
        <div className="btnContainer">
          <button  
            key={item._id} 
            onClick={() => props.handleDeleteUser(item._id)} 
            className="cancel"
          >
            Delete
          </button>
          <button className="edit">Edit</button>
        </div>
      </div>
    )})
  )
}
    
return (
  <div
    className={
      props.userList && props.userList.length > 0
        ? "card-container"
        : "no-result-found"
    }
  >
    {props.userList && props.userList.length > 0 ? (
      usersDetailsHandler()
    ) : (
      <div>
        <img
          className="no-result-img"
          src="https://cdn.dribbble.com/users/1798580/screenshots/4221448/no-result-found-1.jpg"
          alt="No result icon"
        />
      </div>
    )}
  </div>
 );
}

export default Card;