document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    const showSlide = (n) => {
        index = (n + carousel.children.length) % carousel.children.length;
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => showSlide(index - 1));
    nextButton.addEventListener('click', () => showSlide(index + 1));

    // Cambio automático de slides
    setInterval(() => showSlide(index + 1), 5000);
});
