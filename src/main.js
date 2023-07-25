//import { example } from './data.js';
import data from './data/tarot/tarot.js';

//Método para navegar entre archivos HTML con JS.
document.getElementById("btn3").addEventListener("click", function(nav){
nav.preventDefault;
window.location.href='/baraja.html?deck';
});

document.getElementById("image");
const loadImg = new Image;
loadImg.onload = function showImage (){
    loadImg.src = this.src;
};

loadImg.src = data.cards[0].img;

//console.log(data.cards[0].img);

