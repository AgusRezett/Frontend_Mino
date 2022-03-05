import React, { useContext } from 'react';

// Components
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../../hooks/useContext/LangContext';

export default function LanguageOption({ flag, language, region, code }) {
    const idioma = useContext(langContext);

    return <div className='language-option-container'
        onClick={() => {
            idioma.changeLang({ code });
            localStorage.setItem("language", language);
            region ? localStorage.setItem("region", region) : localStorage.removeItem("region");

            window.navigator.vibrate(50);
            window.location.reload();
        }}
    >
        <div className='language-option-content' style={{ cursor: "pointer" }}>
            <div className='language-option-title language-option-color'>
                <b><FormattedMessage id={language} defaultMessage="Error" /> </b>
                {region && "("}
                {region && <FormattedMessage id={region} defaultMessage="Error" />}
                {region && ")"}
            </div>
            <div className='language-option-flag'>
                <img src={flag} alt={language} />
            </div>
        </div>
    </div>;
}
