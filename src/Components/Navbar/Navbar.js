import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import CV from '../../CV/Oscar_Lara_CV.pdf';
const Navbar = () => {


    return (
        <div className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/">Me</Link>
                </li>
                <li>
                    <a href={CV} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
