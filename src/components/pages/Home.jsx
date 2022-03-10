import React, { useEffect, useState } from 'react';
/* import Axios from 'axios'; */

// Components
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import TotalBalanceCard from '../common/HomeView/TotalBalanceCard';
import DonutChart from '../common/HomeView/DonutChart';
import Wallets from '../common/HomeView/Wallets';

// Images
import AppStore from '../../assets/images/app-store-available.svg';
import GooglePlay from '../../assets/images/google-play-available.svg';

// Functions
import { getSelectedBadges } from '../../functions/HomeFunctions';

// Styles
import '../../css/home.css';
import { getPrincipalCurrency } from '../../functions/GlobalFunctions';

// Data
/* import config from '../../data/config.json'; */

export default function Home() {
    const [selectedBadges, setSelectedBadges] = useState([]);

    useEffect(() => {
        getSelectedBadges(setSelectedBadges);
    }, []);

    /* Axios.get(`http://${config.host}:${config.port}/`).then((res) => {
        console.log(res);
    }); */

    return (
        <main>
            <Helmet>
                <title>Mino</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="row">
                {selectedBadges &&
                    selectedBadges.map((badge) => (
                        <TotalBalanceCard
                            key={badge.id}
                            badgeId={badge.id}
                            value={badge.value}
                        />
                    ))}
            </div>
            <div className="row" style={{ padding: 0 }}>
                <div className="my-wallets-space col-md-8">
                    <div className="my-wallets-container">
                        <div className="section-title-container">
                            <div className="section-title">
                                <FormattedMessage
                                    id="home.title.wallets"
                                    defaultMessage="Mis billeteras"
                                />
                            </div>
                        </div>
                        <Wallets />
                    </div>
                </div>
                <div className="money-line-chart col-md-4">
                    <div className="money-line-chart-container">
                        <div className="section-title">
                            <FormattedMessage
                                id="home.title.participation"
                                defaultMessage="Mis billeteras"
                            />
                            {getPrincipalCurrency().toUpperCase()}
                        </div>
                        <DonutChart />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="application-promo-container col-12">
                    <div className="application-promo">
                        <div className="application-promo-title">
                            <FormattedMessage
                                id="home.title.mobile-promo"
                                defaultMessage="Obtené Mino en tú dispositivo móvil"
                            />
                        </div>
                        <div className="application-promo-download-container">
                            <img
                                src={AppStore}
                                className="app-store-button"
                                alt=""
                            />
                            <img
                                src={GooglePlay}
                                className="google-play-button"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
