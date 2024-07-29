document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menuOverlay = document.getElementById('menuOverlay');

    menuButton.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
});
