// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// Components
//import { NavLink } from 'react-router-dom';
//import Logo from '../../../assets/svgs/MinoLogo.svg';
//import ProfileImage from '../../../assets/images/account.jpeg';

// Styles
import '../../../css/navbar.css';


export default function TopNavbar() {
    const [displayBackBtn, setDisplayBackBtn] = useState(null)
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (location.pathname.includes("/billeteras/")) {
            setDisplayBackBtn(true)
        } else {
            setDisplayBackBtn(false)
        }
    }, [location.pathname]);



    return (
        <header>
            <nav className="top-navbar-container">
                {
                    displayBackBtn &&
                    <svg id="top-navbar-go-back-btn" className='top-navbar-go-back' viewBox="0 0 48 48" onClick={() => navigate(-1)}>
                        <circle cx="24" cy="24" r="20" />
                        <polyline points="29,36 17,24 29,12 29,12 " />
                    </svg>
                }
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
                        {/* <div className="navbar-account-image" style={{ backgroundImage: `url(${ProfileImage})` }}></div> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
