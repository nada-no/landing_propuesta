


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



//FADE IN ESLOGAN PORTADA

$(document).ready(function(){
 
    $("#claim h1").fadeIn("slow");
  
});



