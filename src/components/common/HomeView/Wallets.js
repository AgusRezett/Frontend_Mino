import React, { useState } from 'react'

// Components
import { Formik, Field, Form, ErrorMessage } from 'formik';
import WalletCard from './WalletCard'

// Functions
import { getLinkedAccounts, toggleNewWallet } from '../../../functions/HomeFunctions';
//import Axios from 'axios';

export default function Wallets() {
    // eslint-disable-next-line no-unused-vars
    const [wallets, setWallets] = useState(getLinkedAccounts());

    /* Axios.get(`https://web.uala.com.ar/api/home/balance`).then((res) => {
        console.log(res);
    }) */

    return (
        <>
            <div className='wallets-items-container col-12' id='wallet-items-container'>
                <div className='wallet-card-container new-wallet-item-container col-12 col-sm-4 col-md-4 col-lg-3 col-xl-4'>
                    <div className='wallet-card-content new-wallet-item-content' onClick={() => toggleNewWallet("open")}>
                        Añadir billetera
                    </div>
                </div>
                {wallets && wallets.map((wallet, index) => {
                    return <WalletCard key={index} wallet={wallet} />
                })}
            </div>
            <div className="new-wallet-container col-12" id="new-wallet-container">
                <div className="close-btn" onClick={() => toggleNewWallet("close")}>
                    <svg
                        width="28px"
                        height="28px"
                        viewBox="0 0 24 24"
                        stroke="#000"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill='none'
                    >
                        <polyline points="6 10 12 16 18 10" />
                    </svg>
                </div>
                <p className='new-wallet-title' onClick={() => { window.navigator.vibrate(50) }}><b>Añadí una billetera a tu cuenta Mino</b> 💳</p>
                <NewWalletContainer />
            </div>
        </>
    )
}

const NewWalletContainer = () => {
    return (
        <div className='wallet-options-container'>
            <div className="wallet-option-item">
                <svg viewBox="0 0 32 32" style={{ enableBackground: "new 0 0 32 32" }} fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeMiterlimit="10">
                    <polygon points="17,1 6,6.6 6,9 28,9 28,6.6 " />
                    <path d="M3,25l2.6-4.2c1.5-2.3,4-3.8,6.8-3.8H19v0c0,2.2-1.8,4-4,4h-2" />
                    <path d="M15,21h8l1.2-1.6c1.1-1.5,2.9-2.4,4.8-2.4h0l-2.7,4.8c-1.4,2.6-4.2,4.2-7.1,4.2h0c-4.7,0-9.3,1.4-13.2,4l0,0" />
                    <line x1="17" y1="9" x2="17" y2="17" />
                    <line x1="21" y1="9" x2="21" y2="21" />
                    <line x1="25" y1="9" x2="25" y2="18" />
                    <line x1="9" y1="9" x2="9" y2="17" />
                    <line x1="13" y1="9" x2="13" y2="17" />
                </svg>
                Cuenta bancaria
            </div>
            <div className="wallet-option-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Aplicaciones asociadas
            </div>
            <div className="wallet-option-item">
                <svg viewBox="0 0 25 25">
                    <title>Wallet</title>
                    <path id="Wallet" d="M20,15a1,1,0,1,1-1-1A1,1,0,0,1,20,15Zm5-1.75v3.5A1.23,1.23,0,0,1,24,18v3.8A1.25,1.25,0,0,1,22.75,23H2.5A2.5,2.5,0,0,1,0,20.5V5.5A2.5,2.5,0,0,1,2.5,3H20.75A1.25,1.25,0,0,1,22,4.25V7h.75A1.25,1.25,0,0,1,24,8.25v3.8A1.23,1.23,0,0,1,25,13.25ZM1,5.5a1.46,1.46,0,0,0,.46,1.08A1.49,1.49,0,0,0,2.5,7H21V6H3V5H21V4.25A.25.25,0,0,0,20.75,4H2.5A1.5,1.5,0,0,0,1,5.5ZM23,18H19a3,3,0,1,1,0-6h4V8.25A.25.25,0,0,0,22.75,8H2.5A2.47,2.47,0,0,1,1,7.48v13A1.5,1.5,0,0,0,2.5,22H22.75a.25.25,0,0,0,.25-.25Zm1-4.75a.25.25,0,0,0-.25-.25H19a2,2,0,0,0-2,2.34A2.08,2.08,0,0,0,19.11,17h4.64a.25.25,0,0,0,.25-.25Z" fill="#0e1d25" />
                </svg>
                Nueva billetera
            </div>
        </div >
    )
}

<Formik
    initialValues={{ email: '', password: '' }}
    validate={(values) => {
        const errors = {};

        if (values.email) {
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
        <div className="login-form-fields">
            <div className="login-form-field">
                <Field
                    className="login-form-input"
                    type="email"
                    name="email"
                />
                <label htmlFor="email" id="login-email-label">Email</label>
                <ErrorMessage className="input-error" name="email" component="div" />
            </div>
            <div className="login-form-field">
                <Field
                    className="login-form-input"
                    type="text"
                    name="password"
                />
                <label htmlFor="password" id="login-password-label">Contraseña</label>
            </div>
        </div>
        <button className="login-submit-btn login-submit-btn--disabled" type="submit" >
            Continuar
        </button>
    </Form>
</Formik>
