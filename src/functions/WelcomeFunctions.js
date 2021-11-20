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
