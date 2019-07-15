


//JS PARA EL HEADER CAMBIANDO DE COLOR


window.onscroll = function () {
    colormenu()
};

function colormenu() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu_color").style.filter = "invert(100)";
        document.getElementById("color").style.filter = "invert(100)";
    } else {
        document.getElementById("menu_color").style.filter = "none";
        document.getElementById("color").style.filter = "none";

    }
}


//JS PARA EL SLIDERRRR

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
    // $(".slide").fadeIn();
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; 
    
}


//FADE IN ESLOGAN PORTADA

$(document).ready(function(){
 
    $("h1").fadeIn("slow");
  
});



