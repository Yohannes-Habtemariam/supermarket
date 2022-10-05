import React from 'react';
import { NavLink } from "react-router-dom";
import supermarketLogo from "../../assents/lisa-supermarket.png";

const Navbar = () => {
  return (
    <header className='header-container'>
        <nav className='navigation-bar'>

            <figure className='logo-container'>
                <img src={supermarketLogo} alt="Supermarket Logo" />
            </figure>

            <ul className='nav-menu'>
                <li className="nav-item">
                    <NavLink to="/home" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Home </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> About </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/service" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Service </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/research" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Research </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/contact" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Contact </NavLink>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;