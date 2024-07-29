document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuContent = document.getElementById('menuContent');
    const menuClose = document.getElementById('menuClose');

    menuToggle.addEventListener('click', () => {
        menuContent.classList.toggle('show');
    });

    menuClose.addEventListener('click', () => {
        menuContent.classList.remove('show');
    });

    menuContent.addEventListener('click', (event) => {
        if (event.target === menuContent) {
            menuContent.classList.remove('show');
        }
    });
});
