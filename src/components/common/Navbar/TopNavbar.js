import React from 'react'

// Components
//import { NavLink } from 'react-router-dom';
//import Logo from '../../../assets/svgs/MinoLogo.svg';
import ProfileImage from '../../../assets/images/account.jpeg';

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
                <ul className="top-navbar-account">
                    <li>
                        <span>Agustin Nazareno Rezett</span>
                        <div className="navbar-account-image" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
