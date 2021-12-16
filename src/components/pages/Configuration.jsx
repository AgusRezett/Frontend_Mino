import React from 'react';

// Components
import { Helmet } from 'react-helmet-async';

export default function Configuration() {
	return (
		<main>
			<Helmet>
				<title>Configuración</title>
				<meta name="description" content="Nested component" />
			</Helmet>
			<h1>Configuración</h1>
			<p>asd</p>
		</main>
	);
}
