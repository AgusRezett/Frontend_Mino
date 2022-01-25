import React from 'react'

// Components
import { FormattedMessage } from 'react-intl';

// Styles


export default function Navbar({ changeRoute }) {
    return (
        <nav className='configuration-navbar'>
            <ul id="config-navbar">
                <li className="active">
                    <span id="nav-option-0" onClick={(e) => changeRoute(e)}>
                        <FormattedMessage id="navbar.option.settings" defaultMessage="Ajustes" />
                    </span>
                </li>
                <li>
                    <span id="nav-option-1" onClick={(e) => changeRoute(e)}>
                        <FormattedMessage id="navbar.option.preferences" defaultMessage="Preferencias" />
                    </span>
                </li>
                <li>
                    <span id="nav-option-2" onClick={(e) => changeRoute(e)}>
                        <FormattedMessage id="navbar.option.account" defaultMessage="Cuenta" />
                    </span>
                </li>
            </ul>
        </nav >
    )
}
