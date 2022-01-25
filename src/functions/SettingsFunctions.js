export const languageAction = (action = 0) => {
    const modal = document.getElementById('settings-modal-container');
    const overlay = document.getElementById('dark-modal-overlay');

    if (action === 1) {
        modal.classList.add('settings-modal-container-active');
        overlay.classList.add('dark-modal-overlay-active');
    } else if (action === 2) {
        modal.classList.remove('settings-modal-container-active');
        overlay.classList.remove('dark-modal-overlay-active');
    } else {
        modal.classList.toggle('settings-modal-container-active');
        overlay.classList.toggle('dark-modal-overlay-active');
    }
}