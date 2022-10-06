import React from 'react';
import { NavLink } from "react-router-dom";
import supermarketLogo from "../../assents/lisaSupermarketLogo.png";
import shoppingCart from "../../assents/shopping-cart.png"
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className='header-container'>
        <nav className='navigation-bar'>

            <div className='language-registter-login'>
                <h4>SHOP TODAY AND SAVE AT LEAST 20% DISCOUNT</h4>
                <div>
                    <NavLink to="/register"> Register </NavLink>
                    <NavLink to="/register"> Login </NavLink>
                    <select name="language">
                        <option value="defaul">Select Language</option>
                        <option value="english">English</option>
                        <option value="deutsch">German</option>
                        <option value="tigrigna">Tigrigna</option>
                    </select>
                </div>
            </div>

            <div className='logo-search-cart'>
                <figure className='logo-container'>
                    <img src={supermarketLogo} alt="Supermarket Logo" />
                </figure>

                <div>
                    <input type="search" name="" id="" />
                </div>

                <figure>
                    <img src={shoppingCart} alt="Shopping Cart" />
                </figure>

            </div>
                
            <ul className='nav-menu'>
                <li className="nav-item">
                    <NavLink to="/home" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Home </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> About </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/service" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Services </NavLink>
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