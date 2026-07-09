document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true,
        offset: 80
    });

    if (window.gsap) {
        gsap.from('.hero-title', { opacity: 0, y: 24, duration: 0.8, delay: 0.1 });
        gsap.from('.hero-description', { opacity: 0, y: 24, duration: 0.8, delay: 0.25 });
        gsap.from('.hero-buttons', { opacity: 0, y: 24, duration: 0.8, delay: 0.4 });
        gsap.from('.hero-card', { opacity: 0, scale: 0.96, duration: 1, delay: 0.35 });
    }
});
