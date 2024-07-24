// Función para contar hacia atrás hasta la fecha del próximo episodio
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const releaseDate = new Date('2024-07-31T00:00:00'); // Fecha de estreno del episodio

    function updateCountdown() {
        const now = new Date();
        const timeDifference = releaseDate - now;

        if (timeDifference <= 0) {
            countdownElement.innerHTML = "¡Ya está disponible!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
