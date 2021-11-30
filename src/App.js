import React, { useEffect, useState } from 'react';

// Components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Hooks
import { NavbarContext } from './hooks/useContext/NavbarContext';

// Functions
import { getSession } from './functions/LoginFunctions';

// Styles
import './css/global.css';

// Navigation
import Home from './components/pages/Home';
import Login from './components/pages/Login';

export default function App() {
	// Verify if there is a session
	const [userSessionFounded, setUserSessionFounded] = useState(null);
	useEffect(() => {
		setUserSessionFounded(getSession());
	}, [userSessionFounded]);

	/* const [activeSidebar, setActiveSidebar] = useState(false);
	const [homePageLocation, setHomePageLocation] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [showNavbar, setShowNavbar] = useState(false); */

	return (
		<Router basename="/">
			<NavbarContext.Provider
				value={
					{
						/* activeSidebar,
					setActiveSidebar,
					searchValue,
					setSearchValue,
					homePageLocation, */
					}
				}
			>
				{/* {showNavbar && <TopNavbar />}
				{showNavbar && <SideNavbar />} */}
				{/* <NavLink to="/login">Login</NavLink> */}
			</NavbarContext.Provider>
			<Routes>
				{userSessionFounded ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}
			</Routes>
		</Router>
	);
}
