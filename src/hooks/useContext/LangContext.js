import React, { useEffect, useState } from 'react';

// Languages
import SpanishArLang from '../../languages/es-AR.json';
import EnglishUsLang from '../../languages/en-US.json';
import { IntlProvider } from 'react-intl';

export const langContext = React.createContext();

export const LangProvider = ({ children }) => {
    let defaultLocale = localStorage.getItem('language') || 'es-AR';

    const [language, setLanguage] = useState(SpanishArLang);
    const [locale, setLocale] = useState(defaultLocale);

    const changeLang = (newLang) => {
        localStorage.setItem('language', newLang);
        switch (newLang) {
            case 'es-AR':
                setLanguage(SpanishArLang);
                setLocale('es-AR');
                break;
            case 'en-US':
                setLanguage(EnglishUsLang);
                setLocale('en-US');
                break;
            default:
                setLanguage(SpanishArLang);
                setLocale('es-AR');
                break;
        }
    }

    useEffect(() => {
        changeLang(defaultLocale);
    }, [defaultLocale]);

    return (
        <langContext.Provider value={{ changeLang: changeLang }}>
            <IntlProvider locale={locale} messages={language}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}
