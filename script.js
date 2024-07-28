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

// Script para reincio de reloj de estreno
// Función para calcular el tiempo restante hasta el próximo sábado a las 10:30 PM
function getTimeUntilNextEpisode() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    // Calcular el próximo sábado a las 10:30 PM
    const daysUntilSaturday = (6 - currentDay + 7) % 7; // 6 es sábado
    const nextSaturday = new Date(now);
    nextSaturday.setDate(now.getDate() + daysUntilSaturday);
    nextSaturday.setHours(22, 30, 0, 0); // 22:30:00:000 es 10:30 PM

    // Si hoy es sábado y ya son las 10:30 PM o más, ajustar al próximo sábado
    if (currentDay === 6 && (currentHour > 22 || (currentHour === 22 && currentMinute >= 30))) {
        nextSaturday.setDate(nextSaturday.getDate() + 7);
    }

    const timeUntilNextEpisode = nextSaturday - now;

    return {
        days: Math.floor(timeUntilNextEpisode / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeUntilNextEpisode / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeUntilNextEpisode / (1000 * 60)) % 60),
        seconds: Math.floor((timeUntilNextEpisode / 1000) % 60)
    };
}

// Función para actualizar el cronómetro
function updateClock() {
    const timeRemaining = getTimeUntilNextEpisode();

    document.getElementById('clock').textContent = 
        `${timeRemaining.days}d ${String(timeRemaining.hours).padStart(2, '0')}h ` +
        `${String(timeRemaining.minutes).padStart(2, '0')}m ${String(timeRemaining.seconds).padStart(2, '0')}s`;
}

// Actualizar el cronómetro cada segundo
setInterval(updateClock, 1000);
updateClock();
