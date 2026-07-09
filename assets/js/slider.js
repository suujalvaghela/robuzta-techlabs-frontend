const testimonialCards = Array.from(document.querySelectorAll('.testimonial-card'));
const sliderButtons = Array.from(document.querySelectorAll('.slider-button'));

if (testimonialCards.length > 0) {
    let activeIndex = 0;

    function showSlide(index) {
        testimonialCards.forEach(function (card, cardIndex) {
            card.classList.toggle('active', cardIndex === index);
        });
    }

    function changeSlide(direction) {
        activeIndex = (activeIndex + direction + testimonialCards.length) % testimonialCards.length;
        showSlide(activeIndex);
    }

    sliderButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const direction = button.getAttribute('data-direction') === 'next' ? 1 : -1;
            changeSlide(direction);
        });
    });

    setInterval(function () {
        changeSlide(1);
    }, 6000);
}
