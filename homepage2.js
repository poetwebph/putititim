let currentIndex = 0;
let intervalId;
const slideCount = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');

    // Reset intervalId to prevent multiple timers running simultaneously
    clearInterval(intervalId);

    if (index >= slideCount) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slideCount - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Automatically transition to the next slide every 3 seconds (adjust as needed)
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }, 3000); // Change slide every 3 seconds (example)
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
