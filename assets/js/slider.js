const testimonialCards = Array.from(document.querySelectorAll('.testimonial-card'));
const sliderButtons = Array.from(document.querySelectorAll('.slider-button'));

if (testimonialCards.length > 0) {
    let activeIndex = 0;

    const showSlide = (index) => {
        testimonialCards.forEach((card, cardIndex) => {
            card.classList.toggle('active', cardIndex === index);
        });
    }

    const changeSlide = (direction) => {
        activeIndex = (activeIndex + direction + testimonialCards.length) % testimonialCards.length;
        showSlide(activeIndex);
    }

    sliderButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.getAttribute('data-direction') === 'next' ? 1 : -1;
            changeSlide(direction);
        });
    });

    setInterval(() => {
        changeSlide(1);
    }, 6000);
}
