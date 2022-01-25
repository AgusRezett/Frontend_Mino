import React, { useState } from 'react';

// Components
import { IntlProvider } from 'react-intl';

// Languages
import PortugueseBrLang from '../../languages/pt-BR.json';
import SpanishArLang from '../../languages/es-AR.json';
import EnglishUsLang from '../../languages/en-US.json';

export const langContext = React.createContext();

export const LangProvider = ({ children }) => {
    let defaultLocale = localStorage.getItem('lang-code') || "es-AR";

    const [language, setLanguage] = useState(SpanishArLang);
    const [locale, setLocale] = useState(defaultLocale);
    const [firstFetch, setFirstFetch] = useState(true);

    const changeLang = (newLang) => {
        if (typeof newLang === "object") {
            newLang = newLang.code;
        }
        localStorage.setItem('lang-code', newLang);
        console.log(newLang);
        switch (newLang) {
            case 'es-AR':
                setLanguage(SpanishArLang);
                setLocale('es-AR');
                break;
            case 'en-US':
                setLanguage(EnglishUsLang);
                setLocale('en-US');
                break;
            case 'pt-BR':
                setLanguage(PortugueseBrLang);
                setLocale('pt-BR');
                break;
            default:
                setLanguage(SpanishArLang);
                setLocale('es-AR');
                break;
        }
    };

    if (firstFetch) {
        changeLang(defaultLocale);
        setFirstFetch(false);
    }

    return (
        <langContext.Provider value={{ changeLang: changeLang }}>
            <IntlProvider locale={locale} messages={language}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}
