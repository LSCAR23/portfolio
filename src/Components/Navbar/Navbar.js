import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import CV from '../../CV/OscarCV.pdf';
const Navbar = () => {


    return (
        <div className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/">Me</Link>
                </li>
                <li>
                    <a href={CV} target="_blank" rel="noopener noreferrer">CV</a>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
