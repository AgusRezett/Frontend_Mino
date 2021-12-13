import React from 'react';

// Components
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from '../common/Navbar/TopNavbar';
import SideNavbar from '../common/Navbar/SideNavbar';

// Hooks
//import { NavbarContext } from '../../hooks/useContext/NavbarContext';

// Navigation
import Home from './Home';
import Wallets from './Wallets';

export default function ApplicationContent() {
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
					<Route
						path="/criptomonedas"
						element={
							<main>
								<Helmet>
									<title>Mino - Criptomonedas</title>
									<meta name="description" content="Nested component" />
								</Helmet>
								<h1>Criptomonedas</h1>
							</main>
						}
					/>
					<Route
						path="/configuracion"
						element={
							<main>
								<Helmet>
									<title>Mino - Configuración</title>
									<meta name="description" content="Nested component" />
								</Helmet>
								<h1>Configuración</h1>
							</main>
						}
					/>
				</Routes>
			</HelmetProvider>
		</Router>
	);
}
