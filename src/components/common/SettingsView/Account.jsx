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
        icon: '📋',
        langMessageTitle: 'config.account.option.title.change',
        langMessageDescription: 'config.account.option.description.change',
        defaultTitle: 'Solicitar cambios',
        defaultDescription:
            'Presentá una solicitud con los cambios de tus datos personales',
        rightSide: sideArrow,
        responsive: false
    }
];

export default function Cuenta() {
    return (
        <>
            <div className="row" style={{ padding: '0px' }}>
                <AccountInfoSection
                    sectionType="email"
                    value="agustin.rezett@gmail.com"
                />
                <AccountInfoSection sectionType="phone" value="" />
                <AccountInfoSection sectionType={'general'} value="0" />
                <AccountInfoSection sectionType={'verified'} value={false} />
            </div>
            <section className="settings-options-container">
                <div className="settings-options-content">
                    <div className="button-option">Datos personales</div>
                    <div className="button-option">
                        Verificación de identidad
                    </div>
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
