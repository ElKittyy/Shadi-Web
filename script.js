var imagenes = [
    "./img/img 1.jpg",
    "./img/img 2.jpg",
    "./img/img 3.jpg",
    "./img/img 4.jpg",
    "./img/img 5.jpg",
    "./img/img 6.jpg",
    "./img/img 8.jpg"
];
var slider = document.getElementById("img-slider")
var flechaI = document.getElementById("flecha-i")
var flechaD = document.getElementById("flecha-d")

slider.src = imagenes[0];
var cont = 0;

function moverDerecha(){
    if(cont > 6){
        cont = 0
    };
    slider.src = imagenes[cont];
    cont++
}
function moverIzquierda(){
    if(cont < 0){
        cont = 6
    };
    slider.src = imagenes[cont];
    cont--
}
flechaD.onclick = function(){
    moverDerecha();
}
flechaI.onclick = function(){ 
    moverIzquierda();
}