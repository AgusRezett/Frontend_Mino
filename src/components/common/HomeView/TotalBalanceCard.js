import React from 'react'

// Functions
import { badgeDictionary } from '../../../functions/GlobalFunctions';

export default function TotalBalanceCard({ badgeId, value }) {

    return (
        <div className="balance-card-space col-12 col-md-4">
            <div className="balance-card-coin">{badgeDictionary[badgeId].title}</div>
            <div className={`balance-card-container ${badgeDictionary[badgeId].backgroundClass}`}>
                <img src={badgeDictionary[badgeId].flag} alt="" />
            </div>
            <div className="balance-card-bottom">{`${badgeDictionary[badgeId].badge} ${value}`}</div>
        </div>
    )
}
