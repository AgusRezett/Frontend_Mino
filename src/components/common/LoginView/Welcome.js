import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

// Components
import Logo from '../../../assets/svgs/MinoLogo.svg';
// Hooks
//import { NavbarContext } from './hooks/useContext/NavbarContext';

// Functions

// Styles

export default function Welcome() {
	useEffect(() => {
		// wait 1.5s to add a class to welcome-logo id
		setTimeout(() => {
			document.getElementById('welcome-logo').classList.add('welcome-logo-hide');
			document.getElementById('welcome-brand').classList.add('welcome-brand-hide');
			//sleep for 1.5s
			setTimeout(() => {
				document.getElementById('welcome-logo').classList.add('welcome-logo-show');
				document.getElementById('welcome-brand').classList.add('welcome-brand-show');
			}, 1500);
		}, 1750);
	}, []);

	return (
		<div className="welcome-default-container">
			<div className="circle-open-key">
				<img className="welcome-logo" id="welcome-logo" src={Logo} alt="mino-logo" />
				<p className="welcome-brand" id="welcome-brand">
					Mino
				</p>
			</div>
		</div>
	);
}
