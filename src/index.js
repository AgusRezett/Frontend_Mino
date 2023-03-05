import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { LangProvider } from './hooks/useContext/LangContext';
import { ModalProvider } from './hooks/useContext/ModalContext';

ReactDOM.render(
    <React.StrictMode>
        <LangProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </LangProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
