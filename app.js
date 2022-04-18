var slideIndex = -1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var intervalTime = 3000;
var timeoutSS = setInterval(showSlides, intervalTime);


function showSlidesCore() {
  if (slideIndex >= slides.length ) {
    slideIndex = 0;
  }
  if (slideIndex < 0 ) {
    slideIndex = slides.length -1;
  }
  let i = 0;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display ="block";
  dots[slideIndex].className += " active";
}

function showSlides() {
  slideIndex ++;
  showSlidesCore();
  timeoutSS;
}

function moveBack() {
  clearTimeout(timeoutSS);
  slideIndex --;
  showSlidesCore();
  timeoutSS = setInterval(showSlides, intervalTime);
}

function moveForward() {
  clearTimeout(timeoutSS);
  slideIndex ++ ;
  showSlidesCore();
  timeoutSS = setInterval(showSlides, intervalTime);
}

function current(n) {
  clearTimeout(timeoutSS);
  slideIndex = n;
  showSlidesCore();
  timeoutSS = setInterval(showSlides, intervalTime);
}


/*Modal/Ligthbox*/

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var lightboxIndex = 1;
showSlidesLightbox(lightboxIndex);

// Next/previous controls
function plusSlides(n) {
  showSlidesLightbox(lightboxIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesLightbox(lightboxIndex = n);
}


function showSlidesLightbox(n) {
  var i;
  var lSlides = document.getElementsByClassName("lightboxSlides");
  if (n > lSlides.length) {lightboxIndex = 1}
  if (n < 1) {lightboxIndex = lSlides.length}
  for (i = 0; i < lSlides.length; i++) {
    lSlides[i].style.display = "none";
  }

  lSlides[lightboxIndex-1].style.display = "block";

}

/* navbar */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navbarFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//Paralax effect
let welcomeText = document.getElementById("welcome");
let paralaxPictures = document.getElementById("slideshow-cont");

window.addEventListener('scroll', function(){
  var value = window.scrollY;
  welcomeText.style.top = -value * 0.5 + 'px';
  paralaxPictures.style.top = value * 0.2 + 'px';
})


showSlides();
showSlidesLightbox();
