document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('imageCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 3000, // 3 seconds
        pause: false
    });

    // Pause on mouse enter
    carousel.addEventListener('mouseenter', () => {
        carouselInstance.pause();
    });

    // Resume on mouse leave
    carousel.addEventListener('mouseleave', () => {
        carouselInstance.cycle();
    });
});
