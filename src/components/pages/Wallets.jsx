/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Components
import { Carousel } from '../common/WalletsView/Carrousel';
import { Helmet } from 'react-helmet-async';
import TableItemRow from '../common/WalletsView/TableItemRow';

// Functions
import {
    getApplicationsAccounts,
    getBankAccounts,
    getWallets
} from '../../functions/WalletsFunctions';

// Styles
import '../../css/wallets.css';

const tableItemsWallets = [
    {
        id: 1,
        name: 'BBVA Francés',
        percentage: '14.78',
        entry: 'ARS 2100',
        performance: '+43.1'
    },
    {
        id: 2,
        name: 'Binance',
        percentage: '23.11',
        entry: 'USD 19.59',
        performance: '+2.84'
    },
    {
        id: 3,
        name: 'Brubank',
        percentage: '11.26',
        entry: 'ARS 1600',
        performance: '+27.28'
    },
    {
        id: 4,
        name: 'Macro',
        percentage: '21.11',
        entry: 'ARS 3000',
        performance: '-17.34'
    },
    {
        id: 5,
        name: 'Mdex',
        percentage: '9.30',
        entry: 'USD 13.02',
        performance: '-35.92'
    },
    {
        id: 6,
        name: 'Ualá',
        percentage: '20.41',
        entry: 'ARS 2,900',
        performance: '-28.26'
    }
];

export default function Wallets() {
    const [bankAccount, setBankAccount] = useState(getBankAccounts);
    const [appAccounts, setAppAccounts] = useState(getApplicationsAccounts);
    const [wallets, setWallets] = useState(getWallets);

    return (
        <main>
            <Helmet>
                <title>Billeteras</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="row">
                <span className="wallet-inform-container">
                    <div className="wallets-table-container col-12 col-md-8">
                        <div className="wallets-table-content">
                            <div className="wallets-table-header">
                                <div className="header-column-item">
                                    Cuenta
                                    <div>
                                        <span className="order-up">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 14 12 8 18 14 18 14" />{' '}
                                            </svg>
                                        </span>
                                        <span className="order-down">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 10 12 16 18 10" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="header-column-item">
                                    Participación
                                    <div>
                                        <span className="order-up">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 14 12 8 18 14 18 14" />{' '}
                                            </svg>
                                        </span>
                                        <span className="order-down">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 10 12 16 18 10" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="header-column-item">
                                    Disponible
                                    <div>
                                        <span className="order-up">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 14 12 8 18 14 18 14" />{' '}
                                            </svg>
                                        </span>
                                        <span className="order-down">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 10 12 16 18 10" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="header-column-item">
                                    Rendimiento
                                    <div>
                                        <span className="order-up">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 14 12 8 18 14 18 14" />{' '}
                                            </svg>
                                        </span>
                                        <span className="order-down">
                                            <svg
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                color="#000"
                                            >
                                                <polyline points="6 10 12 16 18 10" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="wallets-table-body">
                                {tableItemsWallets.map(
                                    ({
                                        id,
                                        name,
                                        percentage,
                                        entry,
                                        performance
                                    }) => {
                                        return (
                                            <TableItemRow
                                                key={id}
                                                name={name}
                                                percentage={percentage}
                                                entry={entry}
                                                performance={performance}
                                            ></TableItemRow>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="general-balance-container col-12 col-md-4">
                        <div className="general-balance-content">a</div>
                    </div>
                </span>
            </div>
            <div className="wallets-row col-12">
                <h2 className="carrousel-title">Bancos</h2>
                <Carousel itemsArray={bankAccount} />
            </div>
            <div className="wallets-row col-12">
                <h2 className="carrousel-title">Aplicaciones</h2>
                <Carousel itemsArray={appAccounts} />
            </div>
            <div className="wallets-row col-12">
                <h2 className="carrousel-title">Billeteras manuales</h2>
                <Carousel itemsArray={wallets} />
            </div>
        </main>
    );
}
