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
    getTableItemsWallets,
    getTotalBalance,
    getWallets
} from '../../functions/WalletsFunctions';

// Styles
import '../../css/wallets.css';

export default function Wallets() {
    const [totalBalance, setTotalBalance] = useState(getTotalBalance);
    const [tableItemsWallets, setTableItemsWallets] =
        useState(getTableItemsWallets);
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
                        <div className="general-balance-content">
                            <svg
                                x="0px"
                                y="0px"
                                viewBox="0 0 116.8 171"
                                style={{
                                    enableBackground: 'new 0 0 116.8 171'
                                }}
                            >
                                <g>
                                    <path
                                        className="st0"
                                        d="M73.3,89.8l0.2,0.1c0.3,0.1,0.7,0.2,1,0.2c0.3,0,0.6,0,0.9-0.1c0.8-0.2,2-0.9,3.3-1.7c1.5-0.9,3-1.9,4.7-2.4
		c1.1-0.4,5-0.6,8.8-0.7c4.2-0.1,8.4,0.3,8.9,1.1c0.3,0.7,0.5,1.5,0.5,2.4c-0.1,0.8-0.3,1.6-0.8,2.4c-1.1,1.9-3.1,3.3-5,4.6
		c-1.9,1.3-3.7,2.5-3.4,3.5c0,0.1,0.2,0.2,0.5,0.5c0.4,0.3,1,0.7,1.7,1.1c2.6,1.6,4.6,3.2,6.2,5.2c1.7,1.9,3.1,4.1,4.4,6.8
		c0.4,0.8,0.8,1.6,1.1,2.4c0.4,0.9,0.8,1.8,1.1,2.7l0.1,0.3c0.2,1.2,0.5,2.2,0.9,2.8c0.2,0.3,0.3,0.4,0.5,0.4l0.1,0h2
		c0.3,0,0.6,0,0.8,0c1.9-0.1,3-0.2,4.1,2.7c0.8,2,1,4.7,0.9,7.5c-0.1,3-0.7,6-1.4,8c-0.3,1.4-0.9,2.4-1.9,3.2
		c-1,0.8-2.2,1.3-3.8,1.4l-0.1,0h-2.2c-1,0-1.8,0-2.4-0.1c-0.6,0-0.7-0.1-0.8-0.1c-0.1,0.1,0,0.1-0.1,0.3c-0.4,0.6-1,1.4-2.4,2.8
		c-1,1-2.1,2.1-3.1,3.1c-1,0.9-2,1.8-2.8,2.5l-0.5,0.4c-0.9,0.8-1.4,1.1-1.4,1.2c0,0.2,0.2,0.9,0.8,2.2c0.2,0.6,0.4,0.9,0.4,1
		c0.5,1.3,1.1,2.6,1.6,3.8c0.8,1.9,1.7,3.9,2,4.6l0,0.1c0.7,1.7,0.5,3-0.4,3.9c-0.8,0.8-2.1,1.1-3.8,1h-8c-1.1,0.1-2.2-0.2-3.2-0.7
		c-0.9-0.5-1.8-1.4-2.6-2.4l-0.1-0.1c-0.3-0.5-0.6-1.2-0.9-1.9c-0.8-1.8-1.8-3.9-2.6-3.6c-5.4,2.1-10.8,3.4-16.5,3.6
		c-5.7,0.2-11.8-0.7-18.8-2.8c-2-0.3-2.4,0.6-3.1,1.9c-0.2,0.4-0.4,0.8-0.6,1.3l0,0c-0.2,0.3-0.2,0.5-0.3,0.6
		c-0.9,2-1.8,3.9-4.6,4.5l-0.3,0L22.5,171h-0.1c-0.6-0.1-1.2-0.2-1.7-0.5c-0.6-0.3-1-0.7-1.3-1.3c-0.9-1.7-0.3-3,0.3-4.2h0
		c0.1-0.2,0.2-0.4,0.2-0.5l0,0l3.6-8l0.1-0.1c0.4-0.7,0.5-1.2,0.4-1.6c-0.1-0.4-0.4-0.8-0.9-1.2l0,0c-0.7-0.5-1.4-1-2.1-1.6
		c-0.7-0.6-1.4-1.1-2-1.7c-2.1-2-4.1-4.3-5.8-6.8c-1.6-2.4-3-5.1-4-7.8c-0.8-2.2-1.3-4.4-1.6-6.6c-0.1-0.5-0.1-1-0.1-1.6
		c-3.4-1.6-5.7-4.5-6.9-8.3c-1.1-3.9-1-8.7,0.7-14l2.9,0.9c-1.5,4.7-1.7,8.9-0.7,12.2c0.7,2.4,2.1,4.4,4,5.7c0-0.5,0.1-0.9,0.2-1.4
		c0.7-5,2.6-9.6,5.4-13.7C26.5,89,51.6,86.4,73.3,89.8L73.3,89.8z"
                                    />
                                    <path
                                        className="st1"
                                        d="M89.9,115.8c1.4,0,2.6,0.6,3.5,1.4s1.4,2.1,1.4,3.5s-0.6,2.6-1.4,3.5s-2.1,1.4-3.5,1.4c-1.4,0-2.6-0.6-3.5-1.4
		c-0.9-0.9-1.4-2.2-1.4-3.5c0-1.4,0.6-2.6,1.4-3.5C87.3,116.4,88.6,115.8,89.9,115.8L89.9,115.8z M37.3,103.4
		c-1.4,0.5-2.8-0.3-3.3-1.6s0.3-2.8,1.6-3.3c5.8-2,11.8-3,17.8-2.9c6,0,12,1,18,2.9c1.4,0.4,2.2,1.9,1.7,3.3
		c-0.4,1.4-1.9,2.2-3.3,1.7c-5.6-1.7-11.1-2.7-16.5-2.7C48,100.7,42.6,101.5,37.3,103.4L37.3,103.4z"
                                    />
                                </g>
                                <g>
                                    <path
                                        className="st2"
                                        d="M55.4,54.7c5.5,0,10.4,2.2,14,5.8s5.8,8.6,5.8,14S73,85,69.4,88.6s-8.6,5.8-14,5.8c-5.5,0-10.4-2.2-14-5.8
		c-3.6-3.6-5.8-8.6-5.8-14s2.2-10.4,5.8-14C45,56.9,49.9,54.7,55.4,54.7L55.4,54.7z"
                                    />
                                    <path
                                        className="st3"
                                        d="M56.4,56.5c9.4,0,17,7.6,17,17c0,9.4-7.6,17-17,17c-9.4,0-17-7.6-17-17S47,56.5,56.4,56.5L56.4,56.5z"
                                    />
                                    <path
                                        className="st4"
                                        d="M55.4,57.9c9.3,0,16.8,7.5,16.8,16.8s-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8S46.1,57.9,55.4,57.9L55.4,57.9z
		"
                                    />
                                    <path
                                        className="st2"
                                        d="M61.8,69.3L57.2,70c-0.2-0.6-0.4-1-0.6-1.2c-0.2-0.2-0.5-0.4-0.9-0.7v3.5c2.5,0.7,4.1,1.4,5,2.1
		c1.1,1,1.7,2.2,1.7,3.8c0,0.9-0.2,1.7-0.6,2.4c-0.4,0.7-0.9,1.4-1.5,1.9c-0.6,0.5-1.3,0.9-2,1.1c-0.7,0.2-1.5,0.4-2.5,0.4v2.3h-1.8
		v-2.3c-1.2-0.1-2.2-0.3-2.9-0.6c-0.7-0.3-1.4-0.7-1.9-1.2c-0.5-0.5-1-1-1.3-1.6c-0.3-0.6-0.5-1.3-0.7-2.1l4.9-0.6
		c0.1,0.8,0.3,1.4,0.6,1.7c0.2,0.4,0.7,0.7,1.2,0.9v-4.3c-1.7-0.5-2.8-0.9-3.5-1.2c-0.7-0.3-1.3-0.9-1.8-1.6
		c-0.5-0.7-0.8-1.6-0.8-2.7c0-1.5,0.5-2.7,1.5-3.6c1-1,2.5-1.5,4.5-1.6v-1.2h1.8v1.2c1.8,0.1,3.2,0.5,4.2,1.3
		C60.9,66.9,61.5,68,61.8,69.3L61.8,69.3z M53.9,68.1c-0.5,0.2-0.9,0.4-1.1,0.6c-0.2,0.3-0.3,0.6-0.3,0.9c0,0.4,0.1,0.7,0.3,0.9
		c0.2,0.3,0.6,0.5,1.1,0.7L53.9,68.1L53.9,68.1z M55.7,80.1c0.7-0.2,1.2-0.4,1.5-0.8c0.3-0.4,0.5-0.8,0.5-1.2c0-0.4-0.1-0.7-0.4-1.1
		c-0.3-0.3-0.8-0.6-1.6-0.9V80.1L55.7,80.1z"
                                    />
                                    <path
                                        className="st2"
                                        d="M79.6,20.8c6,1.6,10.9,5.5,13.8,10.5c2.9,5,3.9,11.1,2.3,17.2c-1.6,6-5.5,10.9-10.5,13.8
		c-5,2.9-11.1,3.9-17.2,2.3c-6-1.6-10.9-5.5-13.8-10.5c-2.9-5-3.9-11.1-2.3-17.2S57.5,26,62.5,23.1C67.5,20.2,73.6,19.2,79.6,20.8
		L79.6,20.8z"
                                    />
                                    <path
                                        className="st3"
                                        d="M74.2,27.3c10.4,0,18.7,8.4,18.7,18.7c0,10.3-8.4,18.7-18.7,18.7c-10.3,0-18.7-8.4-18.7-18.7
		C55.5,35.7,63.9,27.3,74.2,27.3L74.2,27.3z"
                                    />
                                    <path
                                        className="st4"
                                        d="M78.6,23.9C88.7,26.6,94.8,37,92.1,47.1C89.4,57.3,79,63.4,68.8,60.7C58.7,58,52.6,47.6,55.3,37.4
		S68.4,21.2,78.6,23.9L78.6,23.9z"
                                    />
                                    <path
                                        className="st2"
                                        d="M82.4,38.7l-5.2-0.5c-0.1-0.7-0.2-1.2-0.3-1.5c-0.1-0.3-0.4-0.6-0.8-1l-1,3.9c2.5,1.4,4.1,2.7,4.9,3.7
		c0.9,1.4,1.2,2.9,0.7,4.6c-0.3,1-0.7,1.8-1.4,2.5c-0.6,0.7-1.4,1.2-2.2,1.6s-1.6,0.6-2.5,0.6c-0.8,0-1.8-0.1-2.9-0.3L71,54.9
		l-2-0.5l0.7-2.5c-1.3-0.5-2.3-1-3-1.5c-0.7-0.5-1.3-1.1-1.8-1.8c-0.5-0.7-0.8-1.4-0.9-2.1c-0.2-0.7-0.2-1.5-0.1-2.5l5.6,0.8
		c-0.1,0.9,0,1.6,0.2,2.1c0.2,0.5,0.5,0.9,1.1,1.4l1.3-4.8c-1.7-1-2.9-1.8-3.5-2.3c-0.7-0.6-1.2-1.3-1.5-2.3c-0.3-1-0.4-2-0.1-3.2
		c0.4-1.6,1.3-2.8,2.7-3.6c1.4-0.8,3.2-0.9,5.5-0.5l0.3-1.3l2,0.5L77,32.1c2,0.7,3.4,1.5,4.2,2.6C82.1,35.8,82.5,37.1,82.4,38.7
		L82.4,38.7z M74.1,35c-0.6,0-1.1,0.2-1.4,0.4c-0.3,0.2-0.5,0.5-0.6,0.9c-0.1,0.4-0.1,0.8,0.1,1.1c0.2,0.4,0.5,0.7,1,1.1L74.1,35
		L74.1,35z M72.6,48.8c0.8,0,1.4-0.1,1.9-0.4s0.8-0.7,0.9-1.2c0.1-0.4,0.1-0.9-0.1-1.3c-0.2-0.4-0.7-0.9-1.5-1.5L72.6,48.8
		L72.6,48.8z"
                                    />
                                    <path
                                        className="st2"
                                        d="M31.4,0.2c6.7-0.9,13.2,1,18.2,4.8s8.6,9.6,9.5,16.3c0.9,6.7-1,13.2-4.8,18.2s-9.6,8.6-16.3,9.5
		c-6.7,0.9-13.2-1-18.2-4.8s-8.6-9.6-9.5-16.3s1-13.2,4.8-18.2S24.7,1.1,31.4,0.2L31.4,0.2z"
                                    />
                                    <path
                                        className="st3"
                                        d="M15.5,28.9c6.3-12.1,21.1-16.8,33.2-10.5c12.1,6.3,16.8,21.1,10.5,33.2S38.1,68.4,26,62.1
		C14,55.9,9.3,41,15.5,28.9L15.5,28.9z"
                                    />
                                    <path
                                        className="st4"
                                        d="M32.8,5.1C44,3.6,54.2,11.4,55.7,22.6c1.5,11.2-6.3,21.4-17.5,22.9S16.8,39.2,15.3,28
		C13.8,16.8,21.6,6.5,32.8,5.1L32.8,5.1z"
                                    />
                                    <path
                                        className="st2"
                                        d="M41.7,17.1l-5.5,1.6c-0.4-0.7-0.7-1.1-1-1.4c-0.3-0.2-0.7-0.5-1.2-0.7l0.6,4.3c3.2,0.4,5.3,1,6.4,1.8
		c1.5,1,2.4,2.5,2.6,4.3c0.1,1.1,0,2.1-0.3,3.1c-0.4,1-0.9,1.8-1.6,2.5s-1.4,1.3-2.2,1.6c-0.8,0.4-1.8,0.7-3.1,0.9l0.4,2.8l-2.2,0.3
		l-0.4-2.8c-1.5,0.1-2.7,0-3.7-0.2c-1-0.2-1.8-0.6-2.6-1.1c-0.7-0.5-1.3-1.1-1.8-1.8c-0.5-0.7-0.8-1.5-1.2-2.4l6-1.5
		c0.3,1,0.7,1.6,1,2c0.4,0.4,0.9,0.7,1.7,1l-0.7-5.3c-2.1-0.3-3.6-0.6-4.5-0.9c-0.9-0.3-1.7-0.9-2.5-1.7c-0.7-0.8-1.2-1.9-1.4-3.2
		c-0.2-1.8,0.2-3.4,1.3-4.7c1.1-1.4,2.9-2.3,5.3-2.7l-0.2-1.5l2.2-0.3l0.2,1.5c2.3-0.2,4.1,0.1,5.4,0.9
		C40.1,14.4,41.1,15.5,41.7,17.1L41.7,17.1z M31.8,16.9c-0.6,0.3-1,0.6-1.2,1c-0.2,0.3-0.3,0.7-0.2,1.1c0.1,0.4,0.2,0.8,0.5,1.1
		c0.3,0.3,0.8,0.5,1.4,0.6L31.8,16.9L31.8,16.9z M36,31.4c0.8-0.3,1.4-0.7,1.7-1.2s0.5-1,0.4-1.5c-0.1-0.5-0.3-0.9-0.7-1.2
		c-0.4-0.3-1.1-0.6-2.1-0.8L36,31.4L36,31.4z"
                                    />
                                </g>
                            </svg>
                            <h5>
                                <b>Dinero disponible:</b>
                            </h5>
                            <div className="total-balance-container">
                                <span className="total-balance-currency">
                                    AR$
                                </span>
                                <span className="total-balance-entry">
                                    {totalBalance}
                                </span>
                            </div>
                        </div>
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
