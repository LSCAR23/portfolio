import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {


    return (
        <div className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/">Me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
