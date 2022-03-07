import React from 'react';

// Components
import { FormattedMessage } from 'react-intl';
import OptionButton from './OptionButton';

const sideArrow = (
    <div className="expand-toggler">
        <svg
            viewBox="0 0 24 24"
            stroke="#000"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        >
            <polyline
                /* id={`cardArrow${badgeId}`} */ points="6 10 12 16 18 10"
            />
        </svg>
    </div>
);

const sideLangReg = () => {
    let lang = localStorage.getItem('language');
    let region = localStorage.getItem('region');

    if (!lang) {
        localStorage.setItem('language', 'language.option.es');
        lang = 'language.option.es';
    }

    return (
        <>
            <b style={{ marginRight: '5px' }}>
                <FormattedMessage id={lang} defaultMessage="Error" />
            </b>
            {region && '('}
            {region && <FormattedMessage id={region} defaultMessage=" " />}
            {region && ')'}
        </>
    );
};

// Buttons
const optionButtons = [
    {
        icon: '🌐',
        langMessageTitle: 'config.settings.option.title.language',
        langMessageDescription: 'config.settings.option.description.language',
        defaultTitle: 'Idioma y región',
        defaultDescription: 'Elegí un idioma con el que mostrar la aplicación',
        rightSide: sideLangReg(),
        responsive: true,
        action: 'language'
    },
    {
        icon: '📨',
        langMessageTitle: 'config.settings.option.title.notifications',
        langMessageDescription:
            'config.settings.option.description.notifications',
        defaultTitle: 'Notificaciones',
        defaultDescription: 'Activá las notificaciones que deseás recibir',
        rightSide: sideArrow,
        responsive: false
    },
    {
        icon: '📱',
        langMessageTitle: 'config.settings.option.title.devices',
        langMessageDescription: 'config.settings.option.description.devices',
        defaultTitle: 'Mis dispositivos',
        defaultDescription:
            'Gestioná los dispositivos donde estás utilizando tú cuenta',
        rightSide: sideArrow,
        responsive: false
    },
    {
        icon: '✅',
        langMessageTitle: 'config.settings.option.title.tfa',
        langMessageDescription: 'config.settings.option.description.tfa',
        defaultTitle: 'Verificación de dos pasos',
        defaultDescription:
            'Aumentá la seguridad de tu cuenta validando tu sesión desde más de un dispositivo',
        rightSide: sideArrow,
        responsive: false
    },
    {
        icon: '🔑',
        langMessageTitle: 'config.settings.option.title.anti-phishing',
        langMessageDescription:
            'config.settings.option.description.anti-phishing',
        defaultTitle: 'Código anti-phising',
        defaultDescription:
            'Mediante este código secreto podés diferenciar nuestros mensajes de las imitaciones',
        rightSide: sideArrow,
        responsive: false
    }
];

export default function Ajustes() {
    return (
        <>
            <section className="settings-options-container">
                <div className="settings-options-content">
                    {optionButtons.map((optionButton, index) => (
                        <OptionButton
                            key={index}
                            action={optionButton.action}
                            icon={optionButton.icon}
                            langMessageTitle={optionButton.langMessageTitle}
                            langMessageDescription={
                                optionButton.langMessageDescription
                            }
                            title={optionButton.defaultTitle}
                            description={optionButton.defaultDescription}
                            rightSide={optionButton.rightSide}
                            responsive={optionButton.responsive}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
