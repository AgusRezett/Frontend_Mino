import React, { useEffect, useState } from 'react';

// Functions
import { getSession } from './functions/LoginFunctions';

// Styles
import './css/global.css';

// Navigation
import ApplicationContent from './components/pages/ApplicationContent';
import Login from './components/pages/Login';

export default function App() {
	// Verify if there is a session
	const [userSessionFounded, setUserSessionFounded] = useState(null);
	useEffect(() => {
		setUserSessionFounded(getSession());
		if (!userSessionFounded && window.location.href !== "http://localhost:3000/") {
			window.location.assign("http://localhost:3000/");
		}
	}, [userSessionFounded]);

	/* const [activeSidebar, setActiveSidebar] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [showNavbar, setShowNavbar] = useState(false); */

	/**
	 * Application content provide the whole application functions instead of Login,
	 * which is the only page that can be accessed without a session.
	 */
	return (
		<>
			{userSessionFounded ? <ApplicationContent /> : <Login />}
		</>
	);
}
