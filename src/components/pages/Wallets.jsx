/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Components
import { Helmet } from 'react-helmet-async';
import AliceCarousel from 'react-alice-carousel';

// Images
import Bbva from '../../assets/images/logos/bbva.svg';
import Binance from '../../assets/images/logos/binance.svg';
import Brubank from '../../assets/images/logos/brubank.svg';
import Macro from '../../assets/images/logos/macro.svg';
import Mdex from '../../assets/images/logos/mdex.png';
import Uala from '../../assets/images/logos/uala.svg';

// Functions
import { getApplicationsAccounts, getBankAccounts } from '../../functions/WalletsFunctions';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../css/wallets.css';

const responsive = {
	0: { items: 1 },
	490: { items: 2 },
	568: { items: 3 },
	1024: { items: 4 },
};

const Logos = [Bbva, Binance, Brubank, Macro, Mdex, Uala];

const Carousel = ({ itemsArray }) => {
	let counter = 0;
	const items = itemsArray.map((item) => {
		let Logo;
		console.log(Logos);
		Logos.forEach((img) => {
			if (img.includes(item.logo.toLowerCase())) {
				Logo = img;
			} else {
				console.log(img);
				console.log(item.logo);
			}
		});
		console.log(Logo);

		counter++;
		return (
			<div className="wallet-carrousel-container" data-value={counter}>
				<div className="wallet-carrousel-item" style={{ backgroundColor: item.bgColor, color: item.color }}>
					<div className="description">
						<img className="wallet-carrousel-item-image" src={Logo} alt={item.name} />
						<div className="wallet-carrousel-item-name">{item.name}</div>
					</div>
					<div className="balance">
						<div className="wallet-carrousel-item-currency">{item.currency}</div>
						<div className="wallet-carrousel-item-balance">{item.balance}</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<AliceCarousel
			mouseTracking
			items={items}
			responsive={responsive}
			controlsStrategy="alternate"
			disableDotsControls="true"
		/>
	);
};

export default function Wallets() {
	const [bankAccount, setBankAccount] = useState(getBankAccounts);
	const [appAccounts, setAppAccounts] = useState(getApplicationsAccounts);

	return (
		<main>
			<Helmet>
				<title>Mino - Billeteras</title>
				<meta name="description" content="Nested component" />
			</Helmet>
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
				{/* <Carousel /> */}
			</div>
		</main>
	);
}
