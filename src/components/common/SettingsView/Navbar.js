import React from 'react'

// Components
//import { NavLink } from 'react-router-dom';

// Styles


export default function Navbar({ changeRoute }) {
    return (
        <nav className='configuration-navbar'>
            <ul id="config-navbar">
                <li className="active">
                    <span onClick={(e) => changeRoute(e.target)}>Ajustes</span>
                </li>
                <li>
                    <span onClick={(e) => changeRoute(e.target)}>Preferencias</span>
                </li>
                <li>
                    <span onClick={(e) => changeRoute(e.target)}>Cuenta</span>
                </li>
            </ul>
        </nav>
    )
}
