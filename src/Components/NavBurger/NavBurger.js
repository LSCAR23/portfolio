import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBurger.css'
const Navburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navBurger'>
            <button onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {isOpen && (
                <ul>
                    <li>
                        <Link to="/">Me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navburger;
