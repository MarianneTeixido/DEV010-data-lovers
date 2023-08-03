//import { example } from './data.js';
import { sortCards , filterCards } from './data.js';
import data from './data/tarot/tarot.js';

//Método para navegar entre archivos HTML con JS.
document.getElementById("btn2").addEventListener("click", function(nav){
  nav.preventDefault;
  window.location.href='/baraja.html?reading';
});

//generación de cards sin filtro 
let cardsHTML = '';
data.cards.map(() => {
  cardsHTML += '<div class="flip-card">\
  <div class="flip-card-inner">\
    <div class="flip-card-front">\
      <img data-testid="img" width="100%;" height="100%" ></img>\
    </div>\
    <div class="flip-card-back">\
      <ul>\
        <li data-testid="type">Type: </li>\
        <br>\
        <li data-testid="short-name">Short name: </li>\
        <br>\
        <li data-testid="name">Name: </li>\
        <br>\
        <li data-testid="value">Value: </li>\
        <br>\
        <li data-testid="meaning-up">Meaning up: </li>\
        <br>\
        <li data-testid="meaning-rev">Meaning rev: </li>\
        <li data-testid="description"></li>\
      </ul>\
    </div>\
  </div>\
</div>\
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
}


//Filtro
const $select = document.querySelector("#arcans-filter") //querySelector para el <select> (lista desplegable)

$select.addEventListener("change", filtrar) //Event listener para ejecutar el filtro cuando se cambia la opción del select


function filtrar() {
  //bucles para filtrar
  const selectedOption = $select.selectedIndex;
  if (selectedOption === 0) {
    const cardsHTML = filterCards.allArcans(data, selectedOption);
    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
    for (let i=0; i < data.cards.length; i++) {
      document.querySelectorAll('[data-testid = "img"]')[i].src = data.cards[i].img
      document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + data.cards[i].type
      document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + data.cards[i].name_short
      document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + data.cards[i].name
      document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + data.cards[i].value
      document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + data.cards[i].meaning_up
      document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + data.cards[i].meaning_rev
    }
  }
  
  if (selectedOption === 1) {
    const minorArcans = filterCards.minors(data,selectedOption)[0]
    const total = minorArcans.length
    const cardsHTML = filterCards.minors(data, selectedOption)[1];
    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
    for (let i=0; i < total; i++) {
      document.querySelectorAll('[data-testid = "img"]')[i].src = minorArcans[i].img
      document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + minorArcans[i].type
      document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + minorArcans[i].name_short
      document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + minorArcans[i].name
      document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + minorArcans[i].value
      document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + minorArcans[i].meaning_up
      document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + minorArcans[i].meaning_rev
    }
  } 

  if (selectedOption === 2 ) {
    const majorArcans = filterCards.majors(data,selectedOption)[0]
    const total = majorArcans.length
    const cardsHTML = filterCards.majors(data, selectedOption)[1];
    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
    for (let i=0; i < total; i++) {
      document.querySelectorAll('[data-testid = "img"]')[i].src = majorArcans[i].img
      document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + majorArcans[i].type
      document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + majorArcans[i].name_short
      document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + majorArcans[i].name
      document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + majorArcans[i].value
      document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + majorArcans[i].meaning_up
      document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + majorArcans[i].meaning_rev
    }
  }
} 


//Sort

const sortName = document.getElementById("sort-cards");

sortName.onchange = function(){sortCards(data, sortName.checked)};
//sortName.onchange = sortCards(data, sortName.checked);

/*
Comentario para el futuro cercano 
Randomizar un arreglo usando el algoritmo aleatorio de Durstenfeld
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
*/

//luck

/*const userName = document.getElementById('user-name').value;
const luckButton = document.getElementsByClassName('read-luck')[0];

luckButton.addEventListener('click', function letUserInf() {
  console.log(userName);
})*/
