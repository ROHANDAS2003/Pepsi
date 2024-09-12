var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
    },
});

function lightTheme() {
  document.getElementById("html").style.background = "#0062be";
}
function darkTheme() {
  document.getElementById("html").style.background = "#1e1e1e";
}

function vdoSlider(anything) {
  document.querySelector('.v1').src = anything;
}

var P1 = document.getElementById("P1");
var P2 = document.getElementById("P2");
var P3 = document.getElementById("P3");
var P4 = document.getElementById("P4");
var P5 = document.getElementById("P5");
var P6 = document.getElementById("P6");
var P7 = document.getElementById("P7");
var P8 = document.getElementById("P8");
var P9 = document.getElementById("P9");
var P10 = document.getElementById("P10");
var P11 = document.getElementById("P11");

function S1(){
  P1.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S2(){
  P2.style.display="inline-flex";
  P1.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S3(){
  P3.style.display="inline-flex";
  P2.style.display="none";
  P1.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S4(){
  P4.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P1.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S5(){
  P5.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P1.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S6(){
  P6.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P1.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S7(){
  P7.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P1.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S8(){
  P8.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P1.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S9(){
  P9.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P1.style.display="none";
  P10.style.display="none";
  P11.style.display="none";
}
function S10(){
  P10.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P1.style.display="none";
  P11.style.display="none";
}
function S11(){
  P11.style.display="inline-flex";
  P2.style.display="none";
  P3.style.display="none";
  P4.style.display="none";
  P5.style.display="none";
  P6.style.display="none";
  P7.style.display="none";
  P8.style.display="none";
  P9.style.display="none";
  P10.style.display="none";
  P1.style.display="none";
}