import React, { useEffect, useState } from 'react';

// Components
import { Helmet } from 'react-helmet-async';
import TotalBalanceCard from '../common/HomeView/TotalBalanceCard';
import DonutChart from '../common/HomeView/DonutChart';
import Wallets from '../common/HomeView/Wallets';

// Functions
import { getSelectedBadges } from '../../functions/HomeFunctions';

// Styles
import '../../css/home.css';
import { getPrincipalCurrency } from '../../functions/GlobalFunctions';

export default function Home() {
	const [selectedBadges, setSelectedBadges] = useState([]);

	useEffect(() => {
		getSelectedBadges(setSelectedBadges);
	}, []);

	return (
		<main>
			<Helmet>
				<title>Mino - Inicio</title>
				<meta name="description" content="Nested component" />
			</Helmet>
			<h1>Inicio</h1>
			<div className="row">
				{selectedBadges &&
					selectedBadges.map((badge) => (
						<TotalBalanceCard key={badge.id} badgeId={badge.id} value={badge.value} />
					))}
			</div>
			<div className="row" style={{ padding: 0 }}>
				<div className="my-wallets-space col-md-8">
					<div className="my-wallets-container">
						<div className="section-title-container">
							<div className="section-title">Mis billeteras</div>
						</div>
						<Wallets />
					</div>
				</div>
				<div className="money-line-chart col-md-4">
					<div className="money-line-chart-container">
						<div className="section-title">
							Cuentas vinculadas en {getPrincipalCurrency().toUpperCase()}
						</div>
						<DonutChart />
					</div>
				</div>
			</div>
			<div className="row">
				<div className=" col-12">
					<div className=""></div>
				</div>
			</div>
		</main>
	);
}
