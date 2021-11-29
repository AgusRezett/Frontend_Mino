import React from 'react';

// Components
//import Logo from '../../../assets/svgs/MinoLogo.svg';
// Hooks
//import { NavbarContext } from './hooks/useContext/NavbarContext';

// Functions
import FormContainer from './Form'

// Styles

export default function LoginView() {
	return (
		<div className="welcome-default-container">
			<div className="circle-open-key first-screen-transform" style={{ animation: 0 }} id="first-screen"></div>
			<div id="form-container" className="form-container open-form-container">
				<FormContainer />
			</div>
		</div>
	);
}
