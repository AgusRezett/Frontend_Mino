//? Return if the user has already entered to this page before
export const getFirstTime = () => {
	let firstTime = localStorage.getItem('first-time');
	if (firstTime !== null) {
		firstTime = true;
		localStorage.setItem('first-time', firstTime);
	} else {
		firstTime = false;
	}
	return firstTime;
};
