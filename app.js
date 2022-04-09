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
