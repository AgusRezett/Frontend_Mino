import React, { useState } from 'react';

// Components
import OptionButton from './OptionButton';
import AccountInfoSection from './AccountInfoSection';
//import { FormattedMessage } from 'react-intl';

// Functions
import { getAccountInfo } from '../../../functions/SettingsFunctions';

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
    // eslint-disable-next-line
    const [accountInfo, setAccountInfo] = useState(getAccountInfo());

    return (
        <>
            <div className="row" style={{ padding: '0px' }}>
                <AccountInfoSection
                    sectionType="email"
                    value={accountInfo.email}
                    verified={accountInfo.verified}
                />
                <AccountInfoSection
                    sectionType="phone"
                    value={accountInfo.phone}
                    verified={accountInfo.verified}
                />
                <AccountInfoSection
                    sectionType={'general'}
                    value={accountInfo.person}
                    verified={accountInfo.verified}
                />
                <AccountInfoSection
                    sectionType={'verified'}
                    verified={accountInfo.verified}
                />
            </div>
            {accountInfo.verified && (
                <section className="settings-options-container">
                    <div className="settings-options-content">
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
            )}
        </>
    );
}
