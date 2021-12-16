import React, { useEffect, useState } from 'react';

// Components

import Welcome from '../common/LoginView/Welcome';
import LoginView from '../common/LoginView/LoginView';

// Hooks
//import { NavbarContext } from './hooks/useContext/NavbarContext';

// Functions
import { getFirstTime } from '../../functions/LoginFunctions';

// Styles
import '../../css/login.css';

export default function Login() {
	// Verify if it's a completely new user
	const [firstTime, setFirstTime] = useState(null);
	document.title = 'Ingresar';

	useEffect(() => {
		setFirstTime(getFirstTime());
	}, []);

	return <>{firstTime ? <Welcome /> : <LoginView />}</>;
}
