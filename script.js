document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});

// Ejemplo de notificación push (requiere HTTPS y permiso del usuario)
if ('Notification' in window && navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
    }).catch(function(error) {
        console.error('Error al registrar el Service Worker:', error);
    });
}

function mostrarNotificacion() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('¡Nuevo episodio de One Piece disponible!', {
                body: 'Haz clic aquí para verlo ahora.',
                icon: 'https://example.com/icon.png',
                tag: 'one-piece-notification'
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
    }
    // Simulación de notificación después de 10 segundos
    setTimeout(mostrarNotificacion, 10000);
});
