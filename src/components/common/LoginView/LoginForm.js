import React, { useState } from 'react';
//import Axios from 'axios';

// Components
import { Formik, Field, Form, ErrorMessage } from 'formik';

// Config
//import config from '../../../appconfig.json';

export default function LoginForm() {
	const emailLabel = document.getElementById('login-email-label');
	const passwordLabel = document.getElementById('login-password-label');

	const [visiblePassword, setVisiblePassword] = useState(false)

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={(values) => {
				const errors = {};
				if (values.email) {
					if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = 'Invalid email address';
						errors.email = 'Correo electrónico inválido';
					}
				} else {
					errors.email = 'Requerido';
				}

				if (!values.password) {
					errors.password = 'Requerido';
				}

				//? if errors is empty, the form is fine to submit
				const loginButton = document.getElementsByClassName('login-submit-btn')[0];
				if (Object.keys(errors).length === 0) {
					loginButton.classList.remove('login-submit-btn--disabled');
				} else {
					loginButton.classList.add('login-submit-btn--disabled');
				}

				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(false);
				alert(JSON.stringify(values, null, 2));
				/* Axios.post(`http://${config.host}:${config.port}/login`, values).then((res) => {
					console.log();
				}); */
			}}
		>
			<Form className="login-form-content">
				<div>
					<h4 className="login-form-brand-text">Mino</h4>
					<div className="login-form-title">
						<h1>Ingresar</h1>
					</div></div>
				<div className="login-form-fields">
					<div className="login-form-field">
						<Field
							className="login-form-input"
							type="email"
							name="email"
							onInput={(e) => {
								e.target.value = e.target.value.toLowerCase();
							}}
							onFocus={(e) => {
								emailLabel.classList.add('login-form-input-active');
								e.target.addEventListener('blur', () => {
									!e.target.value && emailLabel.classList.remove('login-form-input-active')
								});
							}}
						/>
						<label htmlFor="email" id="login-email-label">Email</label>
						<ErrorMessage className="input-error" name="email" component="div" />
					</div>
					<div className="login-form-field" style={{ marginTop: "50px" }}>
						<Field
							className="login-form-input"
							type={visiblePassword ? "text" : "password"}
							name="password"
							onFocus={() => {
								passwordLabel.classList.add('login-form-input-active')
							}}
							onBlur={(e) => {
								!e.target.value && passwordLabel.classList.remove('login-form-input-active')
							}}
						/>
						{visiblePassword ? (
							<svg onClick={() => setVisiblePassword(false)} className="eye-icon" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000"><title id="eyeIconTitle">Visible (eye)</title><path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" /><circle cx="12" cy="12" r="3" /></svg>
						) : (
							<svg onClick={() => setVisiblePassword(true)} className="eye-icon" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000"> <title id="eyeClosedIconTitle">Hidden (closed eye)</title> <path d="M20 9C20 9 19.6797 9.66735 19 10.5144M12 14C10.392 14 9.04786 13.5878 7.94861 13M12 14C13.608 14 14.9521 13.5878 16.0514 13M12 14V17.5M4 9C4 9 4.35367 9.73682 5.10628 10.6448M7.94861 13L5 16M7.94861 13C6.6892 12.3266 5.75124 11.4228 5.10628 10.6448M16.0514 13L18.5 16M16.0514 13C17.3818 12.2887 18.3535 11.3202 19 10.5144M5.10628 10.6448L2 12M19 10.5144L22 12" /> </svg>
						)}
						<label htmlFor="password" id="login-password-label">Contraseña</label>
					</div>
					<div className="login-forgot-password">¿Olvidaste tu contraseña?</div>
				</div>
				<div>
					<button className="login-submit-btn login-submit-btn--disabled" type="submit" >
						Continuar
					</button>
					<div className="login-register-btn">
						Aún no tenés una cuenta? <span>Regístrate</span>
					</div>
				</div>
			</Form>
		</Formik>
	);
}
