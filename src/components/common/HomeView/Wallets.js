import React from 'react'

// Components
import WalletCard from './WalletCard'

// Functions
import { getLinkedAccounts } from '../../../functions/HomeFunctions';

export default function Wallets() {
    const wallets = getLinkedAccounts();

    return (
        <div className='wallets-items-container col-12'>
            {wallets && wallets.map((wallet, index) => {
                return <WalletCard key={index} wallet={wallet} />
            })}
        </div>
    )
}
