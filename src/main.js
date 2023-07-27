//import { example } from './data.js';
import data from './data/tarot/tarot.js';

//Método para navegar entre archivos HTML con JS.
document.getElementById("btn2").addEventListener("click", function(nav){
  nav.preventDefault;
  window.location.href='/baraja.html?reading';
});



//bucle querySelector para la imagen al frente de las cards
//bucle querySelector para el texto al reverso de las cards

let cardsHTML = '';
data.cards.map(() => {
  cardsHTML += '<figure class="flip-card">\
  <figure class="flip-card-inner">\
    <figure class="flip-card-front">\
      <img data-testid="img" width="100%;" height="100%" ></img>\
    </figure>\
    <figure class="flip-card-back">\
      <ul>\
        <li data-testid="type">Type: </li>\
        <li data-testid="short-name">Short name: </li>\
        <li data-testid="name">Name: </li>\
        <li data-testid="value">Value: </li>\
        <li data-testid="meaning-up">Meaning up: </li>\
        <li data-testid="meaning-rev">Meaning rev: </li>\
        <li data-testid="description">Description: </li>\
      </ul>\
    </figure>\
  </figure>\
</figure>\
<br>\
'
})

document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
for (let i=0; i < data.cards.length; i++) {
  document.querySelectorAll('[data-testid = "img"]')[i].src = data.cards[i].img
  document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + data.cards[i].type
  document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + data.cards[i].name_short
  document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + data.cards[i].name
  document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + data.cards[i].value
  document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + data.cards[i].meaning_up
  document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + data.cards[i].meaning_rev
  //document.querySelectorAll('[data-testid = "description"]')[i].textContent = "Description: " + data.cards[i].desc
}