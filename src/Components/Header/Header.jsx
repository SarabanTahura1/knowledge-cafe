import React from "react";
import "./Header.css";
import logo from "../../assets/person.png";

const Header = () => {
  return (
    <nav className="header">
      <h2>Knowledge Cafe</h2>

      <img src={logo} alt="" />
    </nav>
  );
};

export default Header;
