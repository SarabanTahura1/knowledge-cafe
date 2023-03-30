import React from 'react';
import "./Header.css";
import logo from "../../assets/person.png"

const Header = () => {
    return (
        <nav className='header'>
            <h2 >Knowledge Cafe</h2>
            <div className='nav-img'>
            <img src={logo} alt="" />
            </div>
            
        </nav>
       
    );
};

export default Header;