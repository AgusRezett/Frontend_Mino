import React, { useState } from 'react'

// Components
import { Formik, Field, Form, ErrorMessage } from 'formik';
import WalletCard from './WalletCard'

// Functions
import { getLinkedAccounts, toggleNewWallet } from '../../../functions/HomeFunctions';
import Axios from 'axios';

export default function Wallets() {
    // eslint-disable-next-line no-unused-vars
    const [wallets, setWallets] = useState(getLinkedAccounts());

    Axios.get(`https://web.uala.com.ar/api/home/balance`).then((res) => {
        console.log(res);
    })

    return (
        <>
            <div className='wallets-items-container col-12' id='wallet-items-container'>
                <div className='wallet-card-container new-wallet-item-container col-12 col-sm-4 col-md-4 col-lg-3 col-xl-4'>
                    <div className='wallet-card-content new-wallet-item-content' onClick={() => toggleNewWallet("open")}>
                        Añadir una tarjeta
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
                <p className='new-wallet-title'><b>Elegí una billetera para vincular a tu cuenta Mino</b> 💳</p>
            </div>
        </>
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
