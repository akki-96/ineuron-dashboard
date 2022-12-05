import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
function Header(props) {
  return (
    <div className="header">
      <div>iNeuron Admin Dashboard</div>
      <div className="filter-container">
        <div className="addBtnContainer">
          <Link to="/add">
            <button className="add">Add User</button>
          </Link>
        </div>
        {/* <div>
          <input
            className="input-search"
            placeholder="Search"
            onChange={(e) => props.searchUserDetails(e.target.value)}
          />
        </div>
        <div className="filter-container">
          <div>
            <select
              onChange={(e) => props.handleFilter(e.target.value)}
              className="custom-select"
            >
              <option value="fiterBy">Filter by</option>
              <option value="ageBelow18">Age below 18</option>
              <option value="ageAbove18">Age above 18 and above</option>
            </select>
          </div>
        </div>
        <div>
          <select
            onChange={(e) => props.handleSorting(e.target.value)}
            className="custom-select"
          >
            <option value="sortBy">Sort by</option>
            <option value="sortName">By name</option>
            <option value="byAge">By age</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
