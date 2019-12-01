var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides
(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


////////Function for First Function
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

////////Function for Second Slide show
function showSlides1(q) {
  var x;
  var slides1 = document.getElementsByClassName("mySlides1Fade1");
  var dots1 = document.getElementsByClassName("dot1");
  if (q > slides1.length) {slideIndex1 = 1}
  if (q < 1) {slideIndex1 = slides1.length}
  for (x = 0; x < slides1.length; x++) {
      slides1[x].style.display = "none";
  }
  for (x = 0; x < dots1.length; x++) {
      dots1[x].className = dots1[x].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides2(q) {
  showSlides1(slideIndex1 += q);
}

// Thumbnail image controls
function currentSlide2(q) {
  showSlides1(slideIndex1 = q);
}
// //////////////// third slide show
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

////////Function for Second Slide show
function showSlides1(q) {
  var x;
  var slides1 = document.getElementsByClassName("mySlides1Fade1");
  var dots1 = document.getElementsByClassName("dot1");
  if (q > slides1.length) {slideIndex1 = 1}
  if (q < 1) {slideIndex1 = slides1.length}
  for (x = 0; x < slides1.length; x++) {
      slides1[x].style.display = "none";
  }
  for (x = 0; x < dots1.length; x++) {
      dots1[x].className = dots1[x].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(q) {
  showSlides1(slideIndex1 += q);
}

// Thumbnail image controls
function currentSlide1(q) {
  showSlides1(slideIndex1 = q);
}


////////Function for third Slide show
function showSlides2(a) {
    var z;
    var slides2 = document.getElementsByClassName("mySlides2Fade2");
    var dots2 = document.getElementsByClassName("dot2");
    if (a > slides2.length) {slideIndex2 = 1}
    if (a < 1) {slideIndex2 = slides2.length}
    for (z = 0; z < slides2.length; z++) {
        slides2[z].style.display = "none";
    }
    for (z = 0; z < dots2.length; z++) {
        dots2[z].className = dots2[z].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className += " active";
  }
  
  var slideIndex2 = 1;
  showSlides2(slideIndex2);
  
  // Next/previous controls
  function plusSlides2(a) {
    showSlides2(slideIndex2 += a);
  }
  
  // Thumbnail image controls
  function currentSlide2(a) {
    showSlides2(slideIndex2 = a);
  }

  ////////Function for four Slide show
function showSlides3(b) {
    var y;
    var slides3 = document.getElementsByClassName("mySlides3Fade3");
    var dots3 = document.getElementsByClassName("dot3");
    if (b > slides3.length) {slideIndex3 = 1}
    if (b < 1) {slideIndex3 = slides3.length}
    for (y = 0; y < slides3.length; y++) {
        slides3[y].style.display = "none";
    }
    for (y = 0; y < dots3.length; y++) {
        dots3[y].className = dots3[y].className.replace(" active", "");
    }
    slides3[slideIndex3-1].style.display = "block";
    dots3[slideIndex3-1].className += " active";
  }
  
  var slideIndex3 = 1;
  showSlides3(slideIndex3);
  
  // Next/previous controls
  function plusSlides3(b) {
    showSlides3(slideIndex3 += b);
  }
  
  
  // Thumbnail image controls
  function currentSlide3(b) {
    showSlides3(slideIndex3 = b);
  }

    ////////Function for FIVE Slide show
function showSlides4(c) {
    var a;
    var slides4 = document.getElementsByClassName("mySlides4Fade4");
    var dots4 = document.getElementsByClassName("dot4");
    if (c > slides4.length) {slideIndex4 = 1}
    if (c < 1) {slideIndex4 = slides4.length}
    for (a = 0; a < slides4.length; a++) {
        slides4[a].style.display = "none";
    }
    for (a = 0; a < dots4.length; a++) {
        dots4[a].className = dots4[a].className.replace(" active", "");
    }
    slides4[slideIndex4-1].style.display = "block";
    dots4[slideIndex4-1].className += " active";
  }
  
  var slideIndex4 = 1;
  showSlides4(slideIndex4);
  
  // Next/previous controls
  function plusSlides4(c) {
    showSlides4(slideIndex4 += c);
  }
  
  
  // Thumbnail image controls
  function currentSlide4(c) {
    showSlides4(slideIndex4 = c);
  }
  
    ////////Function for six Slide show
function showSlides5(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides5Fade5");
    var dots5 = document.getElementsByClassName("dot5");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides5(slideIndex5);
  
  // Next/previous controls
  function plusSlides5(f) {
    showSlides5(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide5(f) {
    showSlides5(slideIndex5 = f);
  }

  
   ////////Function for seven Slide show
function showSlides6(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides6Fade6");
    var dots5 = document.getElementsByClassName("dot6");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides6(slideIndex5);
  
  // Next/previous controls
  function plusSlides6(f) {
    showSlides6(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide6(f) {
    showSlides6(slideIndex5 = f);
  }
   ////////Function for eight Slide show
function showSlides7(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides7Fade7");
    var dots5 = document.getElementsByClassName("dot7");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides7(slideIndex5);
  
  // Next/previous controls
  function plusSlides7(f) {
    showSlides7(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide7(f) {
    showSlides7(slideIndex5 = f);
  }
   ////////Function for nine Slide show
function showSlides8(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides8Fade8");
    var dots5 = document.getElementsByClassName("dot9");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides8(slideIndex5);
  
  // Next/previous controls
  function plusSlides8(f) {
    showSlides8(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide8(f) {
    showSlides8(slideIndex5 = f);
  }
   ////////Function for ten Slide show
function showSlides9(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides9Fade9");
    var dots5 = document.getElementsByClassName("dot9");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides9(slideIndex5);
  
  // Next/previous controls
  function plusSlides9(f) {
    showSlides9(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide9(f) {
    showSlides9(slideIndex5 = f);
  }
   ////////Function for eleven Slide show
function showSlides10(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides10Fade10");
    var dots5 = document.getElementsByClassName("dot10");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides10(slideIndex5);
  
  // Next/previous controls
  function plusSlides10(f) {
    showSlides10(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide10(f) {
    showSlides10(slideIndex5 = f);
  }
   ////////Function for twelev Slide show
function showSlides11(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides11Fade11");
    var dots5 = document.getElementsByClassName("dot11");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides11(slideIndex5);
  
  // Next/previous controls
  function plusSlides11(f) {
    showSlides11(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide11(f) {
    showSlides11(slideIndex5 = f);
  }
   ////////Function for thirteen Slide show
function showSlides12(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides12Fade12");
    var dots5 = document.getElementsByClassName("dot12");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides12(slideIndex5);
  
  // Next/previous controls
  function plusSlides12(f) {
    showSlides12(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide12(f) {
    showSlides12(slideIndex5 = f);
  }
   ////////Function for fourteen Slide show
function showSlides13(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides13Fade13");
    var dots5 = document.getElementsByClassName("dot13");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides13(slideIndex5);
  
  // Next/previous controls
  function plusSlides13(f) {
    showSlides13(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide13(f) {
    showSlides13(slideIndex5 = f);
  }
   ////////Function for fifteen Slide show
function showSlides14(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides14Fade14");
    var dots5 = document.getElementsByClassName("dot14");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides14(slideIndex5);
  
  // Next/previous controls
  function plusSlides14(f) {
    showSlides14(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide14(f) {
    showSlides14(slideIndex5 = f);
  }
   ////////Function for sixteen Slide show
function showSlides15(f) {
    var c;
    var slides5 = document.getElementsByClassName("mySlides15Fade15");
    var dots5 = document.getElementsByClassName("dot15");
    if (f > slides5.length) {slideIndex5 = 1}
    if (f < 1) {slideIndex5 = slides5.length}
    for (c = 0; c < slides5.length; c++) {
        slides5[c].style.display = "none";
    }
    for (c = 0; c < dots5.length; c++) {
        dots5[c].className = dots5[c].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
  }
  
  var slideIndex5 = 1;
  showSlides15(slideIndex5);
  
  // Next/previous controls
  function plusSlides15(f) {
    showSlides15(slideIndex5 += f);
  }
  
  
  // Thumbnail image controls
  function currentSlide15(f) {
    showSlides15(slideIndex5 = f);
  }
