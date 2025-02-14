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


const coneSizes = ['--Please Select An Option--', '14 ft', '15 ft', '15 ft 10 inch Behlen', '18 ft', '19 ft', '21 ft', '24 ft', '27 ft', '33 ft'];
const binSizes = ['--Please Select An Option--', 'Behlen', '5 Tier', '6 Tier', '7 Tier', '8 Tier', '9 Tier', '10 Tier'];
const skidTypes = ['--Please Select An Option--', 'No Skid', 'Double Skid', 'Triple Skid', 'Triple Inset Skid', 'Quad Skid', 'Quad Inset Skid', 'Heavy Quad Skid'];
const chuteTypes = ['--Please Select An Option--', 'Standard Pull', 'Rack & Pinion'];
const airTypes = ['--Please Select An Option--', 'No Air', 'Inverted V', 'X-Air'];
const letSizes = ['--Please Select An Option--', '18 inch', '24 inch', '28 inch'];

let weightValue = document.getElementById('weightNumber');

let bPValue = document.getElementById('bPNumber');

let capacityValue = document.getElementById('capacityNumber');

let legValue = document.getElementById('legNumber');

let firstImg = document.getElementById('firstSlide'); 

let secondImg = document.getElementById('secondSlide');

let thirdImg = document.getElementById('thirdSlide');

let coneSize = document.getElementById('selectionA');

let binSize = document.getElementById('selectionB');

let skidType = document.getElementById('selectionC');

let chuteType = document.getElementById('selectionD');

let airType = document.getElementById('selectionE');

let inletSize = document.getElementById('selectionF');


//function disabling() {
 // if (coneSize === coneSizes[4] && binSize === binSizes[2] ) {
//    console.log("it Works");
//  }
//};

document.getElementById('selectionA').oninput = function() {
  if (coneSize.selectedIndex === 1) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB4').setAttribute('disabled', ""),
    document.getElementById('optionB5').setAttribute('disabled', ""),
    document.getElementById('optionB6').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC5').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionC7').setAttribute('disabled', ""),
    document.getElementById('optionE3').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('selectionB').removeAttribute('disabled', ""),
    document.getElementById('optionB2').removeAttribute('disabled', ""),
    document.getElementById('optionB3').removeAttribute('disabled', ""),
    document.getElementById('optionC2').removeAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");
    
    

  } else if (coneSize.selectedIndex === 2) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB4').setAttribute('disabled', ""),
    document.getElementById('optionB5').setAttribute('disabled', ""),
    document.getElementById('optionB6').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC5').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionC7').setAttribute('disabled', ""),
    document.getElementById('optionE3').setAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('selectionB').removeAttribute('disabled', ""),
    document.getElementById('optionB2').removeAttribute('disabled', ""),
    document.getElementById('optionB3').removeAttribute('disabled', ""),
    document.getElementById('optionC2').removeAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");
    
  } else if (coneSize.selectedIndex === 3) {
    document.getElementById('optionB2').setAttribute('disabled', ""),
    document.getElementById('optionB3').setAttribute('disabled', ""),
    document.getElementById('optionB4').setAttribute('disabled', ""),
    document.getElementById('optionB5').setAttribute('disabled', ""),
    document.getElementById('optionB6').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC5').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionC7').setAttribute('disabled', ""),
    document.getElementById('optionE3').setAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('selectionB').removeAttribute('disabled', ""),
    document.getElementById('optionB1').removeAttribute('disabled', ""),
    document.getElementById('optionC2').removeAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (coneSize.selectedIndex === 4) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB6').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC2').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionC7').setAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('selectionB').removeAttribute('disabled', ""),
    document.getElementById('optionB2').removeAttribute('disabled', ""),
    document.getElementById('optionB3').removeAttribute('disabled', ""),
    document.getElementById('optionB4').removeAttribute('disabled', ""),
    document.getElementById('optionB5').removeAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionE3').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (coneSize.selectedIndex === 5) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB2').setAttribute('disabled', ""),
    document.getElementById('optionB3').setAttribute('disabled', ""),
    document.getElementById('optionB4').setAttribute('disabled', ""),
    document.getElementById('optionB6').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC2').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC5').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionC7').setAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    
    document.getElementById('selectionB').removeAttribute('disabled', ""),
    document.getElementById('optionB5').removeAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionE3').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (coneSize.selectedIndex === 6) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB2').setAttribute('disabled', ""),
    document.getElementById('optionB6').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC2').setAttribute('disabled', ""),
    document.getElementById('optionC7').setAttribute('disabled', ""),
    
    document.getElementById('selectionB').removeAttribute('disabled', ""),
    document.getElementById('optionB3').removeAttribute('disabled', ""),
    document.getElementById('optionB4').removeAttribute('disabled', ""),
    document.getElementById('optionB5').removeAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionC4').removeAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    document.getElementById('optionC6').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionE3').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (coneSize.selectedIndex === 7) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB2').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC2').setAttribute('disabled', ""),
    document.getElementById('optionC3').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    
    document.getElementById('selectionB').removeAttribute('disabled', ""),
    document.getElementById('optionB3').removeAttribute('disabled', ""),
    document.getElementById('optionB4').removeAttribute('disabled', ""),
    document.getElementById('optionB5').removeAttribute('disabled', ""),
    document.getElementById('optionB6').removeAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    document.getElementById('optionC7').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionE3').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (coneSize.selectedIndex === 8) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB7').setAttribute('disabled', ""),
    document.getElementById('optionC2').setAttribute('disabled', ""),
    document.getElementById('optionC3').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionF1').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    
    document.getElementById('selectionB').removeAttribute('disabled', "");
    document.getElementById('optionB2').removeAttribute('disabled', ""),
    document.getElementById('optionB3').removeAttribute('disabled', ""),
    document.getElementById('optionB4').removeAttribute('disabled', ""),
    document.getElementById('optionB5').removeAttribute('disabled', ""),
    document.getElementById('optionB6').removeAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    document.getElementById('optionC7').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionE3').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (coneSize.selectedIndex === 9) {
    document.getElementById('optionB1').setAttribute('disabled', ""),
    document.getElementById('optionB2').setAttribute('disabled', ""),
    document.getElementById('optionB3').setAttribute('disabled', ""),
    document.getElementById('optionB4').setAttribute('disabled', ""),
    document.getElementById('optionB5').setAttribute('disabled', ""),
    document.getElementById('optionB6').setAttribute('disabled', ""),
    document.getElementById('optionC2').setAttribute('disabled', ""),
    document.getElementById('optionC3').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC5').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionF1').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    
    document.getElementById('selectionB').removeAttribute('disabled', "");
    document.getElementById('optionB7').removeAttribute('disabled', ""),
    document.getElementById('optionC7').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionE3').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else {
    document.getElementById('optionB1').removeAttribute('disabled', ""),
    document.getElementById('optionB2').removeAttribute('disabled', ""),
    document.getElementById('optionB3').removeAttribute('disabled', ""),
    document.getElementById('optionB4').removeAttribute('disabled', ""),
    document.getElementById('optionB5').removeAttribute('disabled', ""),
    document.getElementById('optionB6').removeAttribute('disabled', ""),
    document.getElementById('optionB7').removeAttribute('disabled', ""),
    document.getElementById('optionC2').removeAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionC4').removeAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    document.getElementById('optionC6').removeAttribute('disabled', ""),
    document.getElementById('optionC7').removeAttribute('disabled', ""),
    document.getElementById('optionE2').removeAttribute('disabled', ""),
    document.getElementById('optionE3').removeAttribute('disabled', ""),
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),

    document.getElementById('optionB0').removeAttribute('selected', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionB0').setAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionB').setAttribute('disabled', ""),
    document.getElementById('selectionC').setAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  }
};

document.getElementById('selectionB').oninput = function() {
  if (binSize.selectedIndex === 2 && coneSize.selectedIndex === 4 || binSize.selectedIndex === 3 && coneSize.selectedIndex === 4) {
    document.getElementById('optionC5').setAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),

    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').removeAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (binSize.selectedIndex === 4 && coneSize.selectedIndex === 4 || binSize.selectedIndex === 5 && coneSize.selectedIndex === 4) {
    document.getElementById('optionC3').setAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').removeAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if  (binSize.selectedIndex === 5 && coneSize.selectedIndex === 5) {
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', ""),
    document.getElementById('selectionC').removeAttribute('disabled', "");

  } else if (binSize.selectedIndex === 3 && coneSize.selectedIndex === 6) {
    document.getElementById('optionC5').setAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionC3').removeAttribute('disabled', ""),
    document.getElementById('optionC4').removeAttribute('disabled', ""),
    
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').removeAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (binSize.selectedIndex === 4 && coneSize.selectedIndex === 6 || binSize.selectedIndex === 5 && coneSize.selectedIndex === 6) {
    document.getElementById('optionC3').setAttribute('disabled', ""),
    document.getElementById('optionC4').setAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    document.getElementById('optionC6').removeAttribute('disabled', ""),
    
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').removeAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (binSize.selectedIndex === 3 && coneSize.selectedIndex === 7 || binSize.selectedIndex === 4 && coneSize.selectedIndex === 7) {
    document.getElementById('optionC5').removeAttribute('disabled', ""),
    document.getElementById('optionC7').removeAttribute('disabled', ""),
    document.getElementById('optionC6').setAttribute('disabled', ""),
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').removeAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (binSize.selectedIndex === 5 && coneSize.selectedIndex === 7 || binSize.selectedIndex === 6 && coneSize.selectedIndex === 7) {
    document.getElementById('optionC5').setAttribute('disabled', ""),
    
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', ""),
    document.getElementById('selectionC').removeAttribute('disabled', "");

  } else if (binSize.selectedIndex === 2 && coneSize.selectedIndex === 8 || binSize.selectedIndex === 3 && coneSize.selectedIndex === 8 || binSize.selectedIndex === 4 && coneSize.selectedIndex === 8 || binSize.selectedIndex === 5 && coneSize.selectedIndex === 8) {
    document.getElementById('optionC7').setAttribute('disabled', ""),
    document.getElementById('optionC5').removeAttribute('disabled', ""),

    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').removeAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (binSize.selectedIndex === 6 && coneSize.selectedIndex === 8) {
    document.getElementById('optionC5').setAttribute('disabled', ""),    
    document.getElementById('optionC7').removeAttribute('disabled', ""),

    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionC').removeAttribute('disabled', ""),
    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else if (binSize.selectedIndex === 7 || binSize.selectedIndex === 1) {
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', ""),
    document.getElementById('selectionC').removeAttribute('disabled', "");

  } else if (binSize.selectedIndex === 2 && coneSize.selectedIndex === 2 || binSize.selectedIndex === 3 && coneSize.selectedIndex === 2) {
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', ""),
    document.getElementById('selectionC').removeAttribute('disabled', "");

  } else if (binSize.selectedIndex === 2 && coneSize.selectedIndex === 1 || binSize.selectedIndex === 3 && coneSize.selectedIndex === 1) {
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', ""),
    document.getElementById('selectionC').removeAttribute('disabled', "");

  } else {
    document.getElementById('optionC0').removeAttribute('selected', ""),
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionC0').setAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionD').setAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', ""),
    document.getElementById('selectionC').removeAttribute('disabled', "");
    
  }
};


document.getElementById('selectionC').oninput = function() {
  if (skidType.selectedIndex !== 0) {
  document.getElementById('optionD0').removeAttribute('selected', ""),
  document.getElementById('optionE0').removeAttribute('selected', ""),
  document.getElementById('optionF0').removeAttribute('selected', ""),
  document.getElementById('optionD0').setAttribute('selected', ""),
  document.getElementById('optionE0').setAttribute('selected', ""),
  document.getElementById('optionF0').setAttribute('selected', ""),

  document.getElementById('selectionD').removeAttribute('disabled', ""),
  document.getElementById('selectionE').setAttribute('disabled', ""),
  document.getElementById('selectionF').setAttribute('disabled', "");

  } else { 
    document.getElementById('optionD0').removeAttribute('selected', ""),
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionD0').setAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionD').removeAttribute('disabled', ""),
    document.getElementById('selectionE').setAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");
  }
};

document.getElementById('selectionD').oninput = function() {
  if (chuteType.selectedIndex !== 0) {
    
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionE').removeAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");

  } else {
    document.getElementById('optionE0').removeAttribute('selected', ""),
    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionE0').setAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionE').removeAttribute('disabled', ""),
    document.getElementById('selectionF').setAttribute('disabled', "");
  }
};

document.getElementById('selectionE').oninput = function() {
  if (airType.selectedIndex === 1) {
    document.getElementById('optionF1').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').removeAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 1) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 2) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 3) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 4) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 3 && coneSize.selectedIndex === 4) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 5) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 3 && coneSize.selectedIndex === 5) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').setAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 6) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 3 && coneSize.selectedIndex === 6) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 7) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 3 && coneSize.selectedIndex === 7) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 8) {
    document.getElementById('optionF1').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 3 && coneSize.selectedIndex === 8) {
    document.getElementById('optionF1').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 2 && coneSize.selectedIndex === 9) {
    document.getElementById('optionF1').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 3 && coneSize.selectedIndex === 9) {
    document.getElementById('optionF1').setAttribute('disabled', ""),
    document.getElementById('optionF2').setAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");

  } else if (airType.selectedIndex === 0) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').removeAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').setAttribute('disabled', "");
    
  } else if (airType.selectedIndex === 2 || airType.selectedIndex === 3) {
    document.getElementById('optionF1').removeAttribute('disabled', ""),
    document.getElementById('optionF2').removeAttribute('disabled', ""),
    document.getElementById('optionF3').removeAttribute('disabled', ""),
    document.getElementById('optionF4').setAttribute('disabled', ""),

    document.getElementById('optionF0').removeAttribute('selected', ""),
    document.getElementById('optionF0').setAttribute('selected', ""),

    document.getElementById('selectionF').removeAttribute('disabled', "");
  }  
};


document.getElementById('selectionF').oninput = function() {
  if (coneSize.selectedIndex === 1 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "1724",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "176",
    document.getElementById('legNumber').innerHTML = "8";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 1 && skidType.selectedIndex === 2) {
    document.getElementById('weightNumber').innerHTML = "2280",
    document.getElementById('bPNumber').innerHTML = "29",
    document.getElementById('capacityNumber').innerHTML = "176",
    document.getElementById('legNumber').innerHTML = "8";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 1 && skidType.selectedIndex === 3) {
    document.getElementById('weightNumber').innerHTML = "2560",
    document.getElementById('bPNumber').innerHTML = "23",
    document.getElementById('capacityNumber').innerHTML = "176",
    document.getElementById('legNumber').innerHTML = "8";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 2 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "1783",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "234",
    document.getElementById('legNumber').innerHTML = "8";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 2 && skidType.selectedIndex === 2) {
    document.getElementById('weightNumber').innerHTML = "2400",
    document.getElementById('bPNumber').innerHTML = "44",
    document.getElementById('capacityNumber').innerHTML = "234",
    document.getElementById('legNumber').innerHTML = "8";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 2 && skidType.selectedIndex === 3) {
    document.getElementById('weightNumber').innerHTML = "2720",
    document.getElementById('bPNumber').innerHTML = "30",
    document.getElementById('capacityNumber').innerHTML = "234",
    document.getElementById('legNumber').innerHTML = "8";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 3 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "2235",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "303",
    document.getElementById('legNumber').innerHTML = "10";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 3 && skidType.selectedIndex === 2) {
    document.getElementById('weightNumber').innerHTML = "2895",
    document.getElementById('bPNumber').innerHTML = "placeholder",
    document.getElementById('capacityNumber').innerHTML = "303",
    document.getElementById('legNumber').innerHTML = "10";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 3 && skidType.selectedIndex === 3) {
    document.getElementById('weightNumber').innerHTML = "3240",
    document.getElementById('bPNumber').innerHTML = "placeholder",
    document.getElementById('capacityNumber').innerHTML = "303",
    document.getElementById('legNumber').innerHTML = "10";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 2 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "3370",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 2 && skidType.selectedIndex === 3) {
    document.getElementById('weightNumber').innerHTML = "3927",
    document.getElementById('bPNumber').innerHTML = "35",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 3 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "3370",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  }  else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 3 && skidType.selectedIndex === 3) {
    document.getElementById('weightNumber').innerHTML = "3927",
    document.getElementById('bPNumber').innerHTML = "40",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 4 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "3370",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 4 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "4810",
    document.getElementById('bPNumber').innerHTML = "31",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 5 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "3370",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 4 && binSize.selectedIndex === 5 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "4810",
    document.getElementById('bPNumber').innerHTML = "35",
    document.getElementById('capacityNumber').innerHTML = "398",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 5 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "2965",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "549",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 5 && skidType.selectedIndex === 3) {
    document.getElementById('weightNumber').innerHTML = "4195",
    document.getElementById('bPNumber').innerHTML = "38",
    document.getElementById('capacityNumber').innerHTML = "549",
    document.getElementById('legNumber').innerHTML = "12";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 3 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "5252",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 3 && skidType.selectedIndex === 3) {
    document.getElementById('weightNumber').innerHTML = "6405",
    document.getElementById('bPNumber').innerHTML = "46",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 3 && skidType.selectedIndex === 4) {
    document.getElementById('weightNumber').innerHTML = "6405",
    document.getElementById('bPNumber').innerHTML = "46",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 4 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "6805",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 4 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "7590",
    document.getElementById('bPNumber').innerHTML = "40",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 4 && skidType.selectedIndex === 6) {
    document.getElementById('weightNumber').innerHTML = "7590",
    document.getElementById('bPNumber').innerHTML = "40",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 5 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "6805",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 5 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "7590",
    document.getElementById('bPNumber').innerHTML = "40",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 6 && binSize.selectedIndex === 5 && skidType.selectedIndex === 6) {
    document.getElementById('weightNumber').innerHTML = "7590",
    document.getElementById('bPNumber').innerHTML = "45",
    document.getElementById('capacityNumber').innerHTML = "692",
    document.getElementById('legNumber').innerHTML = "14";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 3 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "7250",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Pads Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Pads Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Pads Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 3 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "9350",
    document.getElementById('bPNumber').innerHTML = "42",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Skid Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 3 && skidType.selectedIndex === 7) {
    document.getElementById('weightNumber').innerHTML = "9695",
    document.getElementById('bPNumber').innerHTML = "41",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Skid Iso Low View.png";
   
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 4 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "7250",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Pads Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Pads Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Pads Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 4 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "9350",
    document.getElementById('bPNumber').innerHTML = "47",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Skid Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 4 && skidType.selectedIndex === 7) {
    document.getElementById('weightNumber').innerHTML = "9695",
    document.getElementById('bPNumber').innerHTML = "placeholder",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Skid Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 5 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "7830",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Pads Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Pads Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Pads Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 5 && skidType.selectedIndex === 7) {
    document.getElementById('weightNumber').innerHTML = "10250",
    document.getElementById('bPNumber').innerHTML = "39",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Skid Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 6 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "7830",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Pads Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Pads Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Pads Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 7 && binSize.selectedIndex === 6 && skidType.selectedIndex === 7) {
    document.getElementById('weightNumber').innerHTML = "10250",
    document.getElementById('bPNumber').innerHTML = "43",
    document.getElementById('capacityNumber').innerHTML = "1043",
    document.getElementById('legNumber').innerHTML = "16",
    document.getElementById('firstSlide').src="resources/images/slide photos/24 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/24 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/24 w Skid Iso Low View.png";
    
  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 2 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "8905",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 2 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "11375",
    document.getElementById('bPNumber').innerHTML = "44",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 3 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "9820",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 3 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "12750",
    document.getElementById('bPNumber').innerHTML = "41",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 4 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "10665",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 4 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "13990",
    document.getElementById('bPNumber').innerHTML = "38",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 5 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "10665",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18",
    document.getElementById('firstSlide').src="resources/images/slide photos/2708 09 w Pads Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/2708 09 w Pads Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/2708 09 w Pads Iso Low View.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 5 && skidType.selectedIndex === 5) {
    document.getElementById('weightNumber').innerHTML = "13990",
    document.getElementById('bPNumber').innerHTML = "42",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18",
    document.getElementById('firstSlide').src="resources/images/slide photos/2708 09 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/2708 09 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/2708 09 w Skid Iso Low View.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 6 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "11630",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18",
    document.getElementById('firstSlide').src="resources/images/slide photos/2708 09 w Pads Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/2708 09 w Pads Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/2708 09 w Pads Iso Low View.png";

  } else if (coneSize.selectedIndex === 8 && binSize.selectedIndex === 6 && skidType.selectedIndex === 7) {
    document.getElementById('weightNumber').innerHTML = "15500",
    document.getElementById('bPNumber').innerHTML = "47",
    document.getElementById('capacityNumber').innerHTML = "1464",
    document.getElementById('legNumber').innerHTML = "18",
    document.getElementById('firstSlide').src="resources/images/slide photos/2708 09 w Skid Front View.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/2708 09 w Skid Iso View.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/2708 09 w Skid Iso Low View.png";

  } else if (coneSize.selectedIndex === 9 && skidType.selectedIndex === 1) {
    document.getElementById('weightNumber').innerHTML = "21256",
    document.getElementById('bPNumber').innerHTML = "N/A",
    document.getElementById('capacityNumber').innerHTML = "2750",
    document.getElementById('legNumber').innerHTML = "22";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  } else if (coneSize.selectedIndex === 9 && skidType.selectedIndex === 7) {
    document.getElementById('weightNumber').innerHTML = "29439",
    document.getElementById('bPNumber').innerHTML = "48.8",
    document.getElementById('capacityNumber').innerHTML = "2750",
    document.getElementById('legNumber').innerHTML = "22";
    document.getElementById('firstSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('secondSlide').src="resources/images/slide photos/disclaimer.png",
    document.getElementById('thirdSlide').src="resources/images/slide photos/disclaimer.png";

  }
};