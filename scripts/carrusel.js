// carrusel.js

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const intervalTime = 60000; // 1 minuto en milisegundos

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextItem() {
        currentItem = (currentItem + 1) % items.length;
        showItem(currentItem);
    }

    // Mostrar el primer item
    showItem(currentItem);

    // Cambiar al siguiente item automáticamente cada intervalo
    setInterval(nextItem, intervalTime);
});
