


//JS PARA EL HEADER CAMBIANDO DE COLOR


window.onscroll = function () {
    colormenu()
}

function colormenu() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu_color").style.filter = "invert(100)";
        document.getElementById("color").style.filter = "invert(100)";
    } else {
        document.getElementById("menu_color").style.filter = "none";
        document.getElementById("color").style.filter = "none";

    }
}



//ANIVIEW ANIMACIONES DE TITULOS

//INICIALIZACIÓN

 $(document).ready(function(){
            $('.aniview').AniView();
        });

//OPCIONES

var options = {
    animateThreshold: 150,
    scrollPollInterval: 50
}
$('.aniview').AniView(options);






