import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import reportWebVitals from './reportWebVitals';
import { LangProvider } from './hooks/useContext/LangContext';

ReactDOM.render(
	<React.StrictMode>
		<LangProvider>
			<App />
		</LangProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

//serviceWorkerRegistration.register();
//reportWebVitals();
