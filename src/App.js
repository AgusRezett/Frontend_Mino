/* eslint-disable no-sequences */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Components

// Hooks
import { NavbarContext } from './hooks/useContext/NavbarContext';

// Styles
import './css/global.css';

// Navigation
import Home from './components/pages/Home';
import Login from './components/pages/Login';

export default function App() {
	const [activeSidebar, setActiveSidebar] = useState(false);
	const [homePageLocation, setHomePageLocation] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<Router basename="/">
			<NavbarContext.Provider
				value={{
					activeSidebar,
					setActiveSidebar,
					searchValue,
					setSearchValue,
					homePageLocation,
				}}
			>
				{/* {showNavbar && <TopNavbar />}
				{showNavbar && <SideNavbar />} */}
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/login">Login</NavLink>
			</NavbarContext.Provider>
			<Routes>
				<Route path="/home" element={<Home />} />
				{/* <Route path="/" exact>
					<Login hideNavbar={() => setShowNavbar(false)} />
				</Route> */}
			</Routes>
		</Router>
	);
}
