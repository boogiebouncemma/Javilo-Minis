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

// Portfolio image animations
// Remove the transition class
/*
let square = document.querySelector('.portfolio_img');
square.classList.remove('portfolio_img_transition');

// Create the observer, same as before:
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('portfolio_img_transition');
      return;
    }

    square.classList.remove('portfolio_img_transition');
  });
});

let target = '.portfolio_img';
document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});
*/
/*
if slide index >2, set slide index to 0
if slide index <0, set slide index to 2
if slideindex is equal to 0, 1 or 2, slide disply set to block, dot class add active. everything else set to none and remove active
set slide index to ++
*/
/*
function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  };
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  testText.innerText = slideIndex;
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
*/
/*function moveBack() {
  slides[slideIndex].style.display ="none";
  dots[slideIndex].className = dots[slideIndex].className.replace(" active", "");
  slideIndex--;
  slides[slideIndex].style.display ="block";
  dots[slideIndex].className += " active";

  testText.innerText = slideIndex;
}
function moveForward() {
  slides[slideIndex].style.display ="none";
  dots[slideIndex].className = dots[slideIndex].className.replace(" active", "");
  slideIndex++;
  slides[slideIndex].style.display ="block";
  dots[slideIndex].className += " active";

  testText.innerText = slideIndex;
}*/



showSlides();
showSlidesLightbox();
