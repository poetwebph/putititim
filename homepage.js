let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Reset active dot styles
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Increment slideIndex and wrap around if necessary
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Display the current slide and set active dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // Auto slide every 3 seconds
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
