import React, { useEffect } from 'react';

// Components
import Logo from '../../../assets/svgs/MinoLogo.svg';
// Hooks
//import { NavbarContext } from './hooks/useContext/NavbarContext';

// Functions
import { welcomeTransition } from '../../../functions/WelcomeFunctions';
import LoginForm from './LoginForm';

// Styles

export default function Welcome() {
	useEffect(() => {
		welcomeTransition();
	}, []);

	return (
		<div className="welcome-default-container">
			<div className="circle-open-key" id="first-screen">
				<img className="welcome-logo" id="welcome-logo" src={Logo} alt="mino-logo" />
				<p className="welcome-brand" id="welcome-brand">
					Mino
				</p>
			</div>
			<div id="form-container" className="form-container">
				<LoginForm />
			</div>
		</div>
	);
}
