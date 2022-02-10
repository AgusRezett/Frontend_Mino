import React from 'react';

// Components
import { FormattedMessage } from 'react-intl';

// Images
import EmailSecurity from '../../../assets/svgs/shield.png';
import PhoneSecurity from '../../../assets/svgs/security.png';
import VerifiedCheck from "../../../assets/svgs/verified.png"
import NotVerifiedCheck from "../../../assets/svgs/not-verified.png"

export default function AccountInfoSection({ sectionType, value }) {
    let selectedSection;

    const emailSection = {
        image: EmailSecurity,
        langMessageTitle: "config.account.email.title",
        defaultTitle: "Correo electrónico",
        langMessageDescription: "config.account.email.description",
        defaultDescription: "Dirección de correo asociada a tú cuenta",
        value: value,
        cardWidth: "col-12 col-lg-6"
    }

    const phoneSection = {
        image: PhoneSecurity,
        langMessageTitle: "config.account.phone.title",
        defaultTitle: "Número telefónico",
        langMessageDescription: "config.account.phone.description",
        defaultDescription: "Teléfono asociado a tú cuenta",
        value: value ? value : <FormattedMessage id="config.account.section.undefinedValue" defaultMessage="Sin definir" />,
        cardWidth: "col-12 col-lg-6"
    }

    const generalSection = {
        image: PhoneSecurity,
        value: value,
        cardWidth: "col-12 col-lg-8"
    }

    const verifiedSection = {
        image: value ? VerifiedCheck : NotVerifiedCheck,
        value: value,
        cardWidth: "col-12 col-lg-4"
    }

    switch (sectionType) {
        case "email":
            selectedSection = emailSection;
            break;
        case "phone":
            selectedSection = phoneSection;
            break;
        case "general":
            selectedSection = generalSection;
            break;
        case "verified":
            selectedSection = verifiedSection;
            break;
        default:
            break;
    }

    const topSections = <section className={`info-account-container ${selectedSection.cardWidth}`}>
        <div className="info-account-content">
            {!value && <div className='section-blur'>
                <div className='locked-content-desc'>
                    <svg role="img" viewBox="0 0 58 58" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                        <path d="M14.3,22h19.5c2.3,0,4.3,1.9,4.3,4.3v11.5c0,2.3-1.9,4.3-4.3,4.3H14.3c-2.3,0-4.3-1.9-4.3-4.3V26.3
	C10,23.9,11.9,22,14.3,22z"/>
                        <path d="M24,6L24,6c5.5,0,10,4.5,10,10v6H14v-6C14,10.5,18.5,6,24,6z" />
                        <circle cx="24" cy="32" r="2" />
                    </svg>
                    <FormattedMessage id="common.message.notVerified" defaultMessage="Para acceder verificá tu cuenta" />
                </div>
            </div>}
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
                    null
                }
            </div>
        </div>
    </section>

    const generalRenderSection = <section className={`info-account-container ${selectedSection.cardWidth}`}>
        <div className="info-account-content">
            {selectedSection.form}
        </div>
    </section>

    const verifiedRenderSection = <section className={`info-account-container ${selectedSection.cardWidth}`}>
        <div className="info-account-content">
            <div className='verify-user-status'>
                <img src={selectedSection.image} alt="user-status" />
                {value ?
                    <FormattedMessage id="config.account.verified.checked" defaultMessage="Identidad verificada" />
                    :
                    <>
                        <FormattedMessage id="config.account.verified.notChecked" defaultMessage="Verificación requerida" />
                        <div className='verify-process-btn'>Comenzar</div>
                    </>
                }</div>
        </div>
    </section>

    if (sectionType === "email" || sectionType === "phone") {
        return topSections
    } else if (sectionType === "general") {
        return generalRenderSection;
    } else if (sectionType === "verified") {
        return verifiedRenderSection;
    }
}
