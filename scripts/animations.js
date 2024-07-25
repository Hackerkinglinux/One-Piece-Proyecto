// Contador regresivo para el próximo episodio
const countdown = document.getElementById('countdown');
const targetDate = new Date('2024-07-27T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = '¡El episodio ya está disponible!';
    }
}

const interval = setInterval(updateCountdown, 1000);

// Animación de noticias flotantes
const floatingNews = document.querySelector('.floating-news');

function floatNews() {
    floatingNews.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        floatingNews.style.transform = 'translateY(0)';
    }, 3000);
}

setInterval(floatNews, 6000);
