/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Components
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

// Images
import Bbva from '../../assets/images/logos/bbva.svg';
import Binance from '../../assets/images/logos/binance.svg';
import Brubank from '../../assets/images/logos/brubank.svg';
import Macro from '../../assets/images/logos/macro.svg';
import Mdex from '../../assets/images/logos/mdex.png';
import Uala from '../../assets/images/logos/uala.svg';

// Functions
import { getApplicationsAccounts, getBankAccounts, getWallets } from '../../functions/WalletsFunctions';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../css/wallets.css';

const responsive = {
	0: { items: 1 },
	490: { items: 2 },
	568: { items: 3 },
	1024: { items: 4 },
};

const stagePadding = {
	paddingLeft: 50,
	paddingRight: 100,
};

const Logos = [Bbva, Binance, Brubank, Macro, Mdex, Uala];

const Carousel = ({ itemsArray }) => {
	let counter = 0;
	const items = itemsArray.map((item) => {
		let Logo;
		Logos.forEach((img) => {
			// search if item.logo contains a hex code or a emoji in it with regex
			if (
				/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi.test(
					item.logo
				)
			) {
				Logo = <p className="wallet-carrousel-item-emoji">{item.logo}</p>;
			} else {
				if (img.includes(item.logo.toLowerCase())) {
					Logo = <img className="wallet-carrousel-item-image" src={img} alt={item.name} />;
				}
			}
		});
		counter++;
		return (
			<Link
				to={`${item.name.toLowerCase()}`}
				className="wallet-carrousel-container"
				data-value={counter}
				/* onMouseDown={(e) => {
					e.preventDefault();
				}} */
			>
				<div className="wallet-carrousel-item" style={{ backgroundColor: item.bgColor, color: item.color }}>
					<div className="description">
						{Logo}
						<div className="wallet-carrousel-item-name">{item.name}</div>
					</div>
					<div className="balance">
						<div className="wallet-carrousel-item-currency">{item.currency}</div>
						<div className="wallet-carrousel-item-balance">{item.balance}</div>
					</div>
				</div>
			</Link>
		);
	});

	return (
		<AliceCarousel
			mouseTracking
			items={items}
			responsive={responsive}
			controlsStrategy="alternate"
			/* disableDotsControls="true" */
			disableButtonsControls="true"
			infinite={true}
			stagePadding={stagePadding}
		/>
	);
};

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
