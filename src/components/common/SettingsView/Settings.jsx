import React from 'react';

// Components
import OptionButton from './OptionButton';
const sideArrow = (
	<div className="expand-toggler">
		<svg viewBox="0 0 24 24" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
			<polyline /* id={`cardArrow${badgeId}`} */ points="6 10 12 16 18 10" />
		</svg>
	</div>
);

// Buttons
const optionButtons = [
	{
		icon: '🌏',
		title: 'Idioma y región',
		description: 'Elegí un idioma con el que mostrar la aplicación',
		rightSide: 'Español (Argentina)',
		responsive: true,
	},
	{
		icon: '📨',
		title: 'Notificaciones',
		description: 'Activá las notificaciones que deseás recibir',
		rightSide: sideArrow,
		responsive: false,
	},
	{
		icon: '📱',
		title: 'Mis dispositivos',
		description: 'Gestioná los dispositivos donde estás utilizando tú cuenta',
		rightSide: sideArrow,
		responsive: false,
	},
];

export default function Ajustes() {
	return (
		<section className="settings-options-container">
			<div className="settings-options-content">
				{optionButtons.map((optionButton, index) => (
					<OptionButton
						key={index}
						icon={optionButton.icon}
						title={optionButton.title}
						description={optionButton.description}
						rightSide={optionButton.rightSide}
						responsive={optionButton.responsive}
					/>
				))}

				<div className="button-option">Verificación de dos pasos</div>
				<div className="button-option">Código anti-phising</div>
			</div>
		</section>
	);
}
