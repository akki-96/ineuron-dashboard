import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

const SpecificUserDetails = () => {
  return (
    <>
      <div className="userHeader">
        <Link to="/">
          <img className="backIcon" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" />
        </Link>
          Update User's Details
        <div></div>
      </div>
      <div className="detailsContainer">
        <div className="cardsDetails">
          <div>
            <img
              className="userIcon"
              src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"
              alt="User Icon"
            />
          </div>
          <div>
            <div className="card-details">Name: Akhilesh Singh</div>
            <div className="card-details">Age: 24</div>
            <div className="card-details">Phone: 9198212972</div>
            <div className="card-details">Created at: 5-10-2022</div>
            <div className="card-details">Updated at: 6-10-2022</div>
          </div>
        </div>
        <div className="btnContainer">
        {/* <button className="cancel">Cancel</button> */}
        <button className="edit">Update</button>
      </div>
      </div>
    </>
  );
};

export default SpecificUserDetails;
