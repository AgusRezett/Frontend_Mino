import React from 'react';

// Components
import OptionButton from './OptionButton';
import { FormattedMessage } from 'react-intl';

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

// Buttons
const optionButtons = [
    {
        icon: '☀️',
        langMessageTitle: 'config.preferences.option.title.theme',
        langMessageDescription: 'config.preferences.option.description.theme',
        defaultTitle: 'Temas',
        defaultDescription: 'Buscá los colores que más se adapten a vos',
        rightSide: sideArrow,
        responsive: false,
        action: 'theme'
    },
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

export default function Preferencias() {
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
            <section className="settings-options-container">
                <div className="settings-options-content">
                    <div className="button-option clean-preferences">
                        <FormattedMessage
                            id="config.preferences.option.title.clean-preferences"
                            defaultMessage="Limpiar mis preferencias"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
