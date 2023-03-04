//? Return if the user has already entered to this page before
export const getFirstTime = () => {
    let firstTime = localStorage.getItem('first-time');
    if (firstTime === null) {
        firstTime = true;
        localStorage.setItem('first-time', firstTime);
    } else {
        firstTime = false;
    }
    return firstTime;
};

//? Return TRUE if it's found a user session
export const getSession = () => {
    let session = localStorage.getItem('user-token');
    session !== null ? (session = true) : (session = false);
    return session;
};
