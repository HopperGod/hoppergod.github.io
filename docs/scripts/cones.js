let slideIndex =1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//I want it so if the value of any select elements = index[0] of the option arrays then weightNumber, bPNumber, capacityNumber, and legNumber = '0'
//I also want to make it so if certain select elements = certain index values > 1 then other option elements gain the disabled attribute
//If all the values of select elements are = to an index value of their corresponding arrays => 1 then change the value of the src attribute for the img in the slideshow to a different value associated with the combination of select element values.
//Maybe I'll make a button to change all fields back to = to index[0] or corresponding arrays


const coneSizes = ['optionA0', 'optionA1', 'optionA2', 'optionA3', 'optionA4', 'optionA5', 'optionA6', 'optionA7', 'optionA8', 'optionA9'];

const binSizes = ['optionB0', 'optionB1', 'optionB2', 'optionB3', 'optionB4', 'optionB5', 'optionB6', 'optionB7'];

const skidTypes = ['optionC0', 'optionC1', 'optionC2', 'optionC3', 'optionC4', 'optionC5', 'optionC6', 'optionC7'];

const chuteTypes = ['optionD0', 'optionD1', 'optionD2'];

const airTypes = ['optionE0', 'optionE1', 'optionE2', 'optionE3'];

const letSizes = ['optionF0', 'optionF1', 'optionF2', 'optionF3'];