import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBurger.css'
import CV from '../../CV/OscarCV.pdf';

const Navburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navBurger' >
            <button onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            <ul className={isOpen ? 'nav-menu nav-menu-active' : 'nav-menu'}>
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
        </nav>
    );
};

export default Navburger;
