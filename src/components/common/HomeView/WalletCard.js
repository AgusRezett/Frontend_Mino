import React from 'react'

//Functions
import { darkenColor } from '../../../functions/HomeFunctions';

export default function WalletCard({ wallet }) {

    const hoverBackgroundStyle = (element) => {
        element.style.backgroundColor = darkenColor(wallet.color, 25);
    };

    const normalBackgroundStyle = (element) => {
        element.style.backgroundColor = wallet.color;
    };

    return (
        <div className='wallet-card-container col-12 col-sm-4 col-md-4 col-lg-3 col-xl-4'>
            <a href={`/${wallet.name.toLowerCase()}`} className='wallet-card-content'
                onMouseEnter={(e) => hoverBackgroundStyle(e.target)}
                onMouseLeave={(e) => normalBackgroundStyle(e.target)}
                style={{ backgroundColor: wallet.color }}
            >
                {wallet.name}
            </a>
        </div>
    )
}
