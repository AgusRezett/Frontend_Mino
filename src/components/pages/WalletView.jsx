import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import ActivityRow from '../common/WalletsView/ActivityRow.jsx';

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
                                    defaultMessage="Dinero disponible"
                                />
                            </div>
                            <div className="content-info-row wallet-balance">
                                {walletInfo.totalBalance}
                            </div>
                            <div className="content-info-row">
                                {walletInfo.cardAvailable ? (
                                    <div>
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="card-available"
                                        >
                                            <polyline points="7 13 10 16 17 9" />
                                            <circle cx="12" cy="12" r="10" />
                                        </svg>
                                        <span>
                                            <FormattedMessage
                                                id="wallets.view.row.card-available"
                                                defaultMessage="Tarjeta disponible"
                                            />
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="card-unavailable"
                                        >
                                            <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339" />
                                            <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z" />
                                        </svg>
                                        <span>
                                            <FormattedMessage
                                                id="wallets.view.row.card-unavailable"
                                                defaultMessage="Tarjeta no disponible"
                                            />
                                        </span>
                                    </div>
                                )}
                            </div>
                            {walletInfo.cardAvailable && (
                                <>
                                    <div className="content-info-row content-info-card-row">
                                        <FormattedMessage
                                            id="wallets.view.row.type"
                                            defaultMessage="Tipo de tarjeta"
                                        />
                                        :<span>{walletInfo.cardType}</span>
                                    </div>
                                    <div className="content-info-row content-info-card-row">
                                        <FormattedMessage
                                            id="wallets.view.row.service"
                                            defaultMessage="Servicio"
                                        />
                                        :<span>{walletInfo.service}</span>
                                    </div>
                                </>
                            )}
                            <div className="content-info-row">
                                <a
                                    href={walletInfo.walletUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FormattedMessage
                                        id="wallets.view.row.open-wallet"
                                        defaultMessage="Ir a mi cuenta de"
                                    />
                                    <span>{walletInfo.name}</span>
                                </a>
                            </div>
                            <div className="wallet-actions-menu">
                                <div className="wallet-update-btn">
                                    <FormattedMessage
                                        id="wallets.view.button.account"
                                        defaultMessage="Credenciales"
                                    />
                                </div>
                                <div className="wallet-update-btn">
                                    <FormattedMessage
                                        id="wallets.view.button.refresh"
                                        defaultMessage="Refrescar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wallet-activity-container col-12 col-md-8">
                    <div className="wallet-activity-body">
                        <div className="activity-performance-container">
                            <FormattedMessage
                                id="wallets.view.activity.section.title"
                                defaultMessage="Última actividad"
                            />
                            <div
                                className={`performance-bubble-container ${
                                    walletInfo.performanceDirection === '+'
                                        ? 'positive-performance'
                                        : 'negative-performance'
                                }`}
                            >
                                <span>
                                    {walletInfo.performanceDirection}
                                    {walletInfo.performance}%
                                </span>
                            </div>
                        </div>
                        <div className="activity-log-container">
                            {walletInfo.activity.map(
                                ({ id, operation, amount, date }) => {
                                    return (
                                        <ActivityRow
                                            key={id}
                                            operation={operation}
                                            amount={amount}
                                            date={date}
                                        ></ActivityRow>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
