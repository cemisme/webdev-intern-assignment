import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../conponent/index.scss";

const Header = () => {
    return (
        <header className="header">
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#f6c90e" : "Black" })}>Home</NavLink>
        <NavLink className="cartHeader" to="/mycart" style={({ isActive }) => ({ color: isActive ? "#f6c90e" : "Black" })}>Cart</NavLink>
      </header>
    );
};

export default Header;