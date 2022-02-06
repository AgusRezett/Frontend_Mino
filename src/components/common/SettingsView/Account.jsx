import React from 'react';

// Components
import OptionButton from './OptionButton';
import AccountInfoSection from './AccountInfoSection';
//import { FormattedMessage } from 'react-intl';

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
            <polyline points="6 10 12 16 18 10" />
        </svg>
    </div>
);

// Buttons
const optionButtons = [
    {
        icon: '💰',
        langMessageTitle: 'config.preferences.option.title.currencies',
        langMessageDescription:
            'config.preferences.option.description.currencies',
        defaultTitle: 'Mis divisas',
        defaultDescription:
            'Elegí hasta 3 divisas para mostrar los valores de tus billeteras',
        rightSide: sideArrow,
        responsive: false
    }
];

export default function Cuenta() {
    return (
        <>
            <div className="row" style={{ padding: '0px' }}>
                <AccountInfoSection
                    sectionType={'emails'}
                    value="agustin.rezett@gmail.com"
                />
                <AccountInfoSection
                    sectionType={'phones'}
                    value="+54 9 11 3833-0659"
                />
            </div>
            <section className="settings-options-container">
                <div className="settings-options-content">
                    <div className="button-option">Datos personales</div>
                    <div className="button-option">
                        Verificación de identidad
                    </div>
                    <div className="button-option">Correo electrónico</div>
                    <div className="button-option">Número de teléfono</div>
                    <div className="button-option">Solicitar cambios</div>
                    {optionButtons.map((optionButton, index) => (
                        <OptionButton
                            key={index}
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
