import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from '../common/Navbar/TopNavbar';
import SideNavbar from '../common/Navbar/SideNavbar';

// Hooks
//import { NavbarContext } from '../../hooks/useContext/NavbarContext';

export default function ApplicationContent() {
	return (
		<Router basename="/">
			{/* <NavbarContext.Provider value={}>
			</NavbarContext.Provider> */}
			<TopNavbar />
			<SideNavbar />
			<HelmetProvider>
				<Routes>
					<Route
						path="/"
						element={
							<main>
								<Helmet>
									<title>Mino - Inicio</title>
									<meta name="description" content="Nested component" />
								</Helmet>
								<h1>Inicio</h1>
							</main>
						}
					/>
					<Route
						path="/billeteras"
						element={
							<main>
								<Helmet>
									<title>Mino - Billeteras</title>
									<meta name="description" content="Nested component" />
								</Helmet>
								<h1>Billeteras</h1>
							</main>
						}
					/>
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
