import React, { useContext } from 'react';

// Components
import { FormattedMessage } from 'react-intl';

//Hooks
import { langContext } from '../../../hooks/useContext/LangContext';

export default function Preferencias() {
	const idioma = useContext(langContext);

	return (
		<section className="settings-options-container">
			<div className="settings-options-content">
				<div className="button-option">
					<FormattedMessage id="preference.option.language" defaultMessage="Mis divisas" />
				</div>
				<div className="button-option clean-preferences">Limpiar mis preferencias</div>
			</div>
			<button onClick={() => idioma.changeLang('es-AR')}>español</button>
			<button onClick={() => idioma.changeLang('en-US')}>ingles</button>
		</section>
	);
}
