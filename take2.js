/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Slideshow functionality */
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => (slide.style.display = 'none')); // Hide all slides
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; // Loop back to the first slide
  slides[slideIndex - 1].style.display = 'block'; // Show the current slide
  slides[slideIndex - 1].classList.add('slide'); // Add the slide animation
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Start the slideshow
document.addEventListener('DOMContentLoaded', showSlides);