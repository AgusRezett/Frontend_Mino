import React from 'react';

// Components
import { FormattedMessage } from 'react-intl';

// Functions
import { startListeningToOSTheme, stopListeningToOSTheme } from '../../../functions/GlobalFunctions';


export default function ThemeOption({ image, name, theme, colors }) {
    const defaultTheme = localStorage.getItem("theme")
    const themes = document.getElementsByClassName("radio-internal")
    const html = document.querySelector('html');

    const colorsOption = {
        background: colors.background,
        // eslint-disable-next-line
        background: `linear-gradient(90deg, ${colors.primary} 40%, ${colors.background} 40%)`,
        border: `2px solid ${colors.primary}`,
        color: colors.font
    }

    return <div className='language-option-container'
        style={colorsOption}
    >
        <div className='language-option-content'

        >
            <div className='language-option-title'>
                <b><FormattedMessage id={name} defaultMessage="Error" /></b>
            </div>
            <div
                onClick={(e) => {
                    localStorage.setItem("theme", theme);
                    if (theme === "system") {
                        window.location.reload()
                    }
                    for (let i = 0; i < themes.length; i++) {
                        themes[i].classList.remove("radio-internal-active")
                    }
                    if (e.target.classList[0].includes("external")) {
                        e.target.lastChild.classList.add("radio-internal-active")
                    } else if (e.target.classList[0].includes("internal")) {
                        e.target.classList.add("radio-internal-active")
                    }
                    html.dataset.theme = `theme-${theme}`;

                    window.navigator.vibrate(50);
                }}
                onMouseEnter={(e) => e.target.classList[0].includes("external") ? e.target.style.backgroundColor = colors.font : null}
                onMouseLeave={(e) => e.target.classList[0].includes("external") ? e.target.style.backgroundColor = "transparent" : null}
                className='radio-external'
                style={{ borderColor: colors.font }}>
                <div
                    className={defaultTheme === theme ? "radio-internal radio-internal-active" : "radio-internal"}
                    style={{ backgroundColor: colors.font }}
                >
                </div>
            </div>
        </div>
    </div>;
}
