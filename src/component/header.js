import React from "react";
import "../app.css"
function Header(props) {
  return (
    <div className="header">
      <div>
        iNeuron Admin Dashboard
      </div>
      <div className="filter-container">
        <div>
          <input className="input-search" placeholder="Search" onChange={props.searchUserDetails}/>
        </div>
        <div className="filter-container">
          <div>
            <select onChange={props.handleFilter} class="custom-select">
              <option value="fiterBy">Filter by</option>
              <option value="ageBelow18">Age below 18</option>
              <option value="ageAbove18">Age above 18 and above</option>
            </select>
          </div>
          {/* <div className="filter-icon-container">
            <img className="filter-icon" src="https://th.bing.com/th/id/R.ff245d4444198e0b7c9ccf890f9ea194?rik=kPy4ktSpcx%2fOjQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_166570.png&ehk=CLsbK9jbfhF30XTZn2X3sQz7icULPRcd51J5HjPREKg%3d&risl=&pid=ImgRaw&r=0" alt="filter Icon" />
          </div> */}
        </div>
        {/* <div className="filter-icon-container"> */}
          <div>
            <select onChange={props.handleSorting} class="custom-select">
              <option value="sortBy">Sort by</option>
              <option value="sortName">By name</option>
              <option value="byAge">By age</option>
            </select>
          </div>
          {/* <img className="filter-icon" src="https://cdn.onlinewebfonts.com/svg/img_139727.png" alt="filter Icon" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;