import React from 'react'

// Functions
import { badgeDictionary } from '../../../functions/GlobalFunctions';



export default function TotalBalanceCard({ badgeId, value }) {
    const expandCardBottom = (e) => {
        const polyline = document.getElementById(`cardArrow${badgeId}`);
        if (e.target !== polyline) {
            e.target.classList.toggle('rotate')
            e.target.parentNode.parentNode.classList.toggle('expanded')
        } else {
            e.target.parentNode.classList.toggle('rotate')
            e.target.parentNode.parentNode.parentNode.classList.toggle('expanded')
        }
    }

    return (
        <div className="balance-card-space col-12 col-md-4">
            <div className="balance-card-coin">{badgeDictionary[badgeId].title}</div>
            <div className={`balance-card-container ${badgeDictionary[badgeId].backgroundClass}`}>
                <img src={badgeDictionary[badgeId].flag} alt="" />
            </div>
            <div className="balance-card-bottom">
                {`${badgeDictionary[badgeId].badge} ${value}`}
                <div className='secondary-curreny-value'>{`Total: ${badgeDictionary[badgeId].badge} ${parseInt(value) + 6066.45}`}</div>
                <div className="expand-toggler" onClick={(e) => expandCardBottom(e)}>
                    <svg
                        width="48px"
                        height="48px"
                        viewBox="0 0 24 24"
                        stroke="#000"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill='none'
                    >
                        <polyline id={`cardArrow${badgeId}`} points="6 10 12 16 18 10" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
