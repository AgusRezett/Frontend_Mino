/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Styles
const responsiveStyles = {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
}


export default function OptionButton({ icon, title, description, rightSide, responsive }) {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

    return <div className="button-option" onClick={() => { window.navigator.vibrate(50) }} style={displayWidth <= 480 ? responsive ? responsiveStyles : null : null}>
        <div className="button-information-container">
            <div className="button-header">
                <span className="button-header-icon">{icon}</span>
                <span className="button-header-title">{title}</span>
            </div>
            <span className="button-description">
                {description}
            </span>
        </div>
        <div className='button-right-side'>
            {rightSide}
        </div>

    </div>;
}
