let currentIndex = 0;
let intervalId;
const slideCount = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const videos = document.querySelectorAll('.carousel-item video');

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
            const video = slide.querySelector('video');
            if (video) {
                video.play();
                video.addEventListener('ended', nextSlide);
            }
        } else {
            const video = slide.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
                video.removeEventListener('ended', nextSlide);
            }
        }
    });

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
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
