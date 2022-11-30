import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;