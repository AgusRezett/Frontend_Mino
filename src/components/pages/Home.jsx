import React, { useEffect, useState } from 'react';

// Components
import { Helmet } from 'react-helmet-async';
import TotalBalanceCard from '../common/HomeView/TotalBalanceCard';

// Functions
import { getSelectedBadges } from '../../functions/HomeFunctions';

// Styles
import '../../css/home.css';

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
		</main>
	);
}
