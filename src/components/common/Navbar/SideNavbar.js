import React, { useEffect } from 'react'

// Components
import { NavLink } from 'react-router-dom';
//import Logo from '../../../assets/svgs/MinoLogo.svg';

// Functions
import { pressNavigateButton } from '../../../functions/SideNavbarFunctions';

export default function SideNavbar() {

    useEffect(() => {
        pressNavigateButton();
        window.addEventListener('resize', pressNavigateButton);
        return () => {
            window.removeEventListener('resize', () => pressNavigateButton);
        }
    })

    return (
        <aside className="side-navbar-container">
            <ul id="sideNavbarContainer" className="side-navbar-links">
                <li>
                    <NavLink to="/" onClick={(e) => pressNavigateButton(e.target)}>
                        <svg className="nav-element-icon" style={{ marginBottom: "4px" }} viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" >
                            <title id="homeAltIconTitle">Home</title>
                            <path d="M3 10.182V22h18V10.182L12 2z" />
                            <rect width="6" height="8" x="9" y="14" />
                        </svg>
                        <span>Inicio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/billeteras" onClick={(e) => pressNavigateButton(e.target)}>
                        <svg className="nav-element-icon" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            <title id="creditCardIconTitle">Credit Card</title>
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <path d="M2,14 L22,14" />
                        </svg>
                        <span>Cuentas vinculadas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/criptomonedas" onClick={(e) => pressNavigateButton(e.target)}>
                        <svg className="nav-element-icon-special" viewBox="0 0 128 128" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M 89 1 C 80.43 1 72.339609 3.7905469 65.599609 9.0605469 C 64.299609 10.080547 64.059844 11.969531 65.089844 13.269531 C 66.109844 14.579531 68.000781 14.799297 69.300781 13.779297 C 74.970781 9.3492969 81.78 7 89 7 C 106.64 7 121 21.35 121 39 C 121 46.22 118.6607 53.029219 114.2207 58.699219 C 113.2007 59.999219 113.43047 61.890156 114.73047 62.910156 C 115.28047 63.340156 115.93008 63.550781 116.58008 63.550781 C 117.47008 63.550781 118.34945 63.150391 118.93945 62.400391 C 124.20945 55.660391 127 47.57 127 39 C 127 18.05 109.95 1 89 1 z M 54 21 C 24.78 21 1 44.78 1 74 C 1 103.22 24.78 127 54 127 C 83.22 127 107 103.22 107 74 C 107 44.78 83.22 21 54 21 z M 54 27 C 79.92 27 101 48.08 101 74 C 101 99.92 79.92 121 54 121 C 28.08 121 7 99.92 7 74 C 7 48.08 28.08 27 54 27 z M 43 41 C 41.34 41 40 42.34 40 44 L 40 51 L 37 51 C 35.34 51 34 52.34 34 54 C 34 55.66 35.34 57 37 57 L 40 57 L 40 91 L 37 91 C 35.34 91 34 92.34 34 94 C 34 95.66 35.34 97 37 97 L 40 97 L 40 104 C 40 105.66 41.34 107 43 107 C 44.66 107 46 105.66 46 104 L 46 97 L 54 97 L 54 104 C 54 105.66 55.34 107 57 107 C 58.66 107 60 105.66 60 104 L 60 97 L 65 97 C 72.17 97 78 91.17 78 84 C 78 78.37 74.400625 73.589297 69.390625 71.779297 C 71.020625 69.609297 72 66.92 72 64 C 72 57.17 66.7 51.560781 60 51.050781 L 60 44 C 60 42.34 58.66 41 57 41 C 55.34 41 54 42.34 54 44 L 54 51 L 46 51 L 46 44 C 46 42.34 44.66 41 43 41 z M 46 57 L 59 57 C 62.86 57 66 60.14 66 64 C 66 67.86 62.86 71 59 71 L 46 71 L 46 57 z M 46 77 L 59 77 L 65 77 C 68.86 77 72 80.14 72 84 C 72 87.86 68.86 91 65 91 L 46 91 L 46 77 z" />
                        </svg>
                        <span>Criptomonedas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/configuracion" onClick={(e) => pressNavigateButton(e.target)}>
                        <svg className="nav-element-icon" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            <title id="toolIconTitle">Tool</title>
                            <path d="M9.74292939,13.7429294 C9.19135019,13.9101088 8.60617271,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,7.07370693 2.20990431,6.19643964 2.58474197,5.4131691 L6.94974747,9.77817459 L9.77817459,6.94974747 L5.4131691,2.58474197 C6.19643964,2.20990431 7.07370693,2 8,2 C11.3137085,2 14,4.6862915 14,8 C14,8.88040772 13.8103765,9.71652648 13.4697429,10.4697429 L20.5858636,17.5858636 C21.3669122,18.3669122 21.3669122,19.6332422 20.5858636,20.4142907 L19.9142907,21.0858636 C19.1332422,21.8669122 17.8669122,21.8669122 17.0858636,21.0858636 L9.74292939,13.7429294 Z" />
                        </svg>
                        <span>Configuración</span>
                    </NavLink>
                </li>
                <div id="activeNavlinkBackground" className="active-navlink-background">
                    <div className="active-navlink-background-stick"></div>
                </div>
            </ul>
        </aside>
    )
}
