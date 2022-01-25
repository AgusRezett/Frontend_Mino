/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

// Styles
const responsiveStyles = {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
}


export default function OptionButton({ icon, langMessageTitle, title, langMessageDescription, description, rightSide, responsive }) {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

    return <div className="button-option" onClick={() => { window.navigator.vibrate(50) }} style={displayWidth <= 480 ? responsive ? responsiveStyles : null : null}>
        <div className="button-information-container">
            <div className="button-header">
                <span className="button-header-icon">{icon}</span>
                <span className="button-header-title">
                    <FormattedMessage id={langMessageTitle} defaultMessage={title} />
                </span>
            </div>
            <span className="button-description">
                <FormattedMessage id={langMessageDescription} defaultMessage={description} />
            </span>
        </div>
        <div className='button-right-side'>
            {rightSide}
        </div>

    </div>;
}
