// Función para actualizar el contador de cuenta regresiva
function updateCountdown() {
    const countdownDate = new Date("2024-07-28T00:00:00").getTime(); // Ajusta la fecha y hora
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculo del tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Actualizar el contador cada 1 segundo
    setTimeout(updateCountdown, 1000);
}

// Iniciar el contador al cargar la página
window.onload = updateCountdown;
