document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showNextItem() {
        carouselItems[currentIndex].classList.remove("visible");
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add("visible");
    }

    setInterval(showNextItem, 5000);
});
