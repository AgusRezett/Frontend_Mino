import React, { useContext } from 'react';

// Components
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from '../common/Navbar/TopNavbar';
import SideNavbar from '../common/Navbar/SideNavbar';

// Hooks
//import { NavbarContext } from '../../hooks/useContext/NavbarContext';
import { modalContext } from '../../hooks/useContext/ModalContext';

// Navigation
import Home from './Home';
import Wallets from './Wallets';
import WalletView from './WalletView';
import Crypto from './Crypto';
import Configuration from './Configuration';
import SettingsModal from '../common/SettingsView/SettingsModal';

export default function ApplicationContent() {
    const modal = useContext(modalContext);

    return (
        <Router basename="/">
            {/* <NavbarContext.Provider value={}>
			</NavbarContext.Provider> */}
            <TopNavbar />
            <SideNavbar />
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/billeteras" element={<Wallets />} />
                    <Route path="/billeteras/:id" element={<WalletView />} />
                    <Route path="/criptomonedas" element={<Crypto />} />
                    <Route path="/configuracion" element={<Configuration />} />
                </Routes>
            </HelmetProvider>

            <SettingsModal modalType={modal.modalType} />
        </Router>
    );
}
