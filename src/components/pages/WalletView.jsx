import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';

// Functions
import { getWalletInfo } from '../../functions/WalletsFunctions';

// Styles
import '../../css/wallet-view.css';

// Data
/* import config from '../../data/config.json'; */

export default function Home() {
    let { id } = useParams();
    // eslint-disable-next-line
    const [walletInfo, setWalletInfo] = useState(getWalletInfo(id));

    return (
        <main>
            <Helmet>
                <title>
                    Billeteras - {id.charAt(0).toUpperCase() + id.slice(1)}
                </title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="row" style={{ padding: 0 }}>
                <section className="wallet-info-container col-12 col-md-4">
                    <div className="wallet-info-body">
                        <div
                            className="wallet-info-portrait"
                            style={{
                                color: walletInfo.brandColor,
                                backgroundColor: walletInfo.backgroundColor
                            }}
                        >
                            {walletInfo.name}
                        </div>
                        <div className="wallet-info-content">
                            <div className="content-info-row">
                                <FormattedMessage
                                    id="wallets.view.row.balance"
                                    defaultMessage="Balance total"
                                />
                                :<span>{walletInfo.totalBalance}</span>
                            </div>

                            <div className="wallet-update-btn">
                                <FormattedMessage
                                    id="wallets.view.button.update"
                                    defaultMessage="Actualizar"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
