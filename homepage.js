document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  let currentSlideIndex = 0;

  function showSlide(index) {
    // Ensure index is within bounds
    currentSlideIndex = (index + totalSlides) % totalSlides;

    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    // Show the selected slide
    slides[currentSlideIndex].classList.add('active');

    // Update active dot
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
  }

  function setSlideOnClick() {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
  }

  // Initial setup
  showSlide(0);
  setSlideOnClick();

  // Auto play slides every 3 seconds
  setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 3000);
});
