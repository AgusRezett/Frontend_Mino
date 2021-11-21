//? Render in screen each text of an array of messages
export const printWelcomeMessages = (messages, setGuideStep) => {
	document.getElementById('welcome-button').classList.add('hidden');
	const welcomeMessage = document.getElementById('welcome-message');
	let counter = -1;
	messages.forEach((element) => {
		counter += 1;
		setTimeout(function timer() {
			welcomeMessage.textContent = element.message;
		}, counter * 3000);
	});

	setTimeout(() => {
		welcomeMessage.remove();
	}, messages.length * 3000);
};

//? Complete animation of the welcome screen
export const welcomeTransition = () => {
	// wait 1.5s to add a class to welcome-logo id
	setTimeout(() => {
		document.getElementById('welcome-logo').classList.add('welcome-logo-hide');
		document.getElementById('welcome-brand').classList.add('welcome-brand-hide');
		document.getElementById('first-screen').classList.add('first-screen-transform');
		document.getElementById('form-container').classList.add('open-form-container');
		//sleep for 1.5s
		setTimeout(() => {
			document.getElementById('welcome-logo').classList.add('welcome-logo-show');
			document.getElementById('welcome-brand').classList.add('welcome-brand-show');
		}, 1500);
	}, 1750);
};
