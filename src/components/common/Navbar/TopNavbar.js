import React from 'react'

// Components
//import { NavLink } from 'react-router-dom';
//import Logo from '../../../assets/svgs/MinoLogo.svg';

// Styles
import '../../../css/navbar.css';

export default function TopNavbar() {
    return (
        <header>
            <nav className="top-navbar-container">
                <ul className="top-navbar-logo">
                    <li>
                        <a href="/">
                            <h1>Mino</h1>
                            {/* <img src={Logo} alt="logo" /> */}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
