import React, { useState } from 'react';

// Components
import { IntlProvider } from 'react-intl';

// Languages
import ArabianLang from '../../languages/ar-AR.json';
import ChinesseSimpLang from '../../languages/zh-CN.json';
import DeutschLang from '../../languages/de-DE.json';
import EnglishGbLang from '../../languages/en-GB.json';
import EnglishUsLang from '../../languages/en-US.json';
import FrenchLang from '../../languages/fr-FR.json';
import ItalianLang from '../../languages/it-IT.json';
import JapaneseLang from '../../languages/jp-JP.json';
import PortugueseBrLang from '../../languages/pt-BR.json';
import RusianLang from '../../languages/ru-RU.json';
import SpanishArLang from '../../languages/es-AR.json';
import SpanishEsLang from '../../languages/es-ES.json';

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
            case 'ar-AR':
                setLanguage(ArabianLang);
                setLocale('ar-AR');
                break;
            case 'de-DE':
                setLanguage(DeutschLang);
                setLocale('de-DE');
                break;
            case 'es-AR':
                setLanguage(SpanishArLang);
                setLocale('es-AR');
                break;
            case 'es-ES':
                setLanguage(SpanishEsLang);
                setLocale('es-ES');
                break;
            case 'en-GB':
                setLanguage(EnglishGbLang);
                setLocale('en-GB');
                break;
            case 'en-US':
                setLanguage(EnglishUsLang);
                setLocale('en-US');
                break;
            case 'fr-FR':
                setLanguage(FrenchLang);
                setLocale('fr-FR');
                break;
            case 'it-IT':
                setLanguage(ItalianLang);
                setLocale('it-IT');
                break;
            case 'jp-JP':
                setLanguage(JapaneseLang);
                setLocale('jp-JP');
                break;
            case 'pt-BR':
                setLanguage(PortugueseBrLang);
                setLocale('pt-BR');
                break;
            case 'ru-RU':
                setLanguage(RusianLang);
                setLocale('ru-RU');
                break;
            case 'zh-CN':
                setLanguage(ChinesseSimpLang);
                setLocale('zh-CN');
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
