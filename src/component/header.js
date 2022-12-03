import React from "react";
import "../app.css"
function Header() {
  return (
    <div className="header">
      <div>
        iNeuron Admin Dashboard
      </div>
      <div className="filter-container">
        <div className="filter-icon-container">
          <img className="filter-icon" src="https://th.bing.com/th/id/R.ff245d4444198e0b7c9ccf890f9ea194?rik=kPy4ktSpcx%2fOjQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_166570.png&ehk=CLsbK9jbfhF30XTZn2X3sQz7icULPRcd51J5HjPREKg%3d&risl=&pid=ImgRaw&r=0" alt="filter Icon" />
        </div>
        <div className="filter-icon-container">
          <img className="filter-icon" src="https://cdn.onlinewebfonts.com/svg/img_139727.png" alt="filter Icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;