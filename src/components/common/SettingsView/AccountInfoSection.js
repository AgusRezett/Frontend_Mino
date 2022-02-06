import React from 'react';

// Components
import { FormattedMessage } from 'react-intl';

// Images
import EmailSecurity from '../../../assets/svgs/shield.png';
import EmailSecurityError from '../../../assets/svgs/shield-error.png';
import PhoneSecurity from '../../../assets/svgs/security.png';
import PhoneSecurityError from '../../../assets/svgs/security-error.png';


export default function AccountInfoSection({ sectionType, value }) {
    const emailSection = {
        image: value ? EmailSecurity : EmailSecurityError,
        langMessageTitle: "config.account.email.title",
        defaultTitle: "Correo electrónico",
        langMessageDescription: "config.account.email.description",
        defaultDescription: "Dirección de correo asociada a tú cuenta",
        value: value,
    }

    const phoneSection = {
        image: value ? PhoneSecurity : PhoneSecurityError,
        langMessageTitle: "config.account.phone.title",
        defaultTitle: "Número telefónico",
        langMessageDescription: "config.account.phone.description",
        defaultDescription: "Teléfono asociado a tú cuenta",
        value: value,
    }

    const selectedSection = sectionType === "emails" ? emailSection : sectionType === "phones" ? phoneSection : null;

    return <section className="info-account-container col-12 col-lg-6">
        <div className="info-account-content">
            <div className="verified-info-header">
                <img
                    className="info-illustration"
                    src={selectedSection.image}
                    alt=""
                />
                <div className="header-info">
                    <div className="header-title">
                        <FormattedMessage id={selectedSection.langMessageTitle} defaultMessage={selectedSection.defaultTitle} />
                    </div>
                    <div className="header-description">
                        <FormattedMessage id={selectedSection.langMessageDescription} defaultMessage={selectedSection.defaultDescription} />
                    </div>
                </div>
            </div>
            {selectedSection.form}
            <div className='section-value'>
                {selectedSection.value}
                {value ?
                    <div className="change-value-btn">
                        <FormattedMessage id="config.account.section.button.modify" defaultMessage="Cambiar" />
                    </div>
                    :
                    <div className="change-value-btn">
                        <FormattedMessage id="config.account.section.button.add" defaultMessage="Añadir" />
                    </div>}
            </div>
        </div>
    </section>;
}
