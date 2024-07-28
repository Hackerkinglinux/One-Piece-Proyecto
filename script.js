 // Script para el reloj
 function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Script para eliminar el loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Script para cursor personalizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Script la transicion de info de episodio de estreno 
document.addEventListener('DOMContentLoaded', () => {
    const episodes = document.querySelectorAll('.video-photo-section');
    let currentIndex = 0;

    function showEpisode(index) {
        episodes.forEach((ep, i) => {
            ep.style.display = i === index ? 'flex' : 'none';
        });
    }

    function showNextEpisode() {
        currentIndex = (currentIndex + 1) % episodes.length;
        showEpisode(currentIndex);
    }

    function showPrevEpisode() {
        currentIndex = (currentIndex - 1 + episodes.length) % episodes.length;
        showEpisode(currentIndex);
    }

    document.getElementById('nextButton').addEventListener('click', showNextEpisode);
    document.getElementById('prevButton').addEventListener('click', showPrevEpisode);

    showEpisode(currentIndex);
});
