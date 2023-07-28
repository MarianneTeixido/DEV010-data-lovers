//import { example } from './data.js';
import data from './data/tarot/tarot.js';

//Método para navegar entre archivos HTML con JS.
document.getElementById("btn2").addEventListener("click", function(nav){
  nav.preventDefault;
  window.location.href='/baraja.html?reading';
});

//generación de cards sin filtro 
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
        <li data-testid="description"></li>\
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


//Filtro
const $select = document.querySelector("#arcans-filter") //querySelector para el <select> (lista desplegable)

$select.addEventListener("change", filtrar) //Event listener para ejecutar el filtro cuando se cambia la opción del select

function filtrar() {
  //bucles para filtrar
  const selectedOption = $select.selectedIndex;
  if (selectedOption === 0){ //bucle para la opción none, genera todas las cards
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
            <li data-testid="description"></li>\
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
  }
  if (selectedOption === 1) {
    const minorArcans = data.cards.filter(obj => obj.type === "minor"); //bucle para opción 1, genera sólo las cards de arcanos menores
    const total = minorArcans.length
    let cardsHTML = '';
    minorArcans.map(() => {
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
            <li data-testid="description"></li>\
          </ul>\
        </figure>\
      </figure>\
    </figure>\
    <br>\
    '
    })

    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
    for (let i=0; i < total; i++) {
      document.querySelectorAll('[data-testid = "img"]')[i].src = minorArcans[i].img
      document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + minorArcans[i].type
      document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + minorArcans[i].name_short
      document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + minorArcans[i].name
      document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + minorArcans[i].value
      document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + minorArcans[i].meaning_up
      document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + minorArcans[i].meaning_rev
      //document.querySelectorAll('[data-testid = "description"]')[i].textContent = "Description: " + minorArcans[i].desc
    }
    
  } 

  if (selectedOption === 2 ) {
    const majorArcans = data.cards.filter(obj => obj.type === "major"); //bucle para opción 2, genera cards sólo de arcanos mayores
    const total = majorArcans.length
    let cardsHTML = '';
    majorArcans.map(() => {
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
            <li data-testid="description"></li>\
          </ul>\
        </figure>\
      </figure>\
    </figure>\
    <br>\
    '
    })

    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
    for (let i=0; i < total; i++) {
      document.querySelectorAll('[data-testid = "img"]')[i].src = majorArcans[i].img
      document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + majorArcans[i].type
      document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + majorArcans[i].name_short
      document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + majorArcans[i].name
      document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + majorArcans[i].value
      document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + majorArcans[i].meaning_up
      document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + majorArcans[i].meaning_rev
      //document.querySelectorAll('[data-testid = "description"]')[i].textContent = "Description: " + majorArcans[i].desc
    }
  }
} 


//Sort
const sortName = document.getElementById("sort");
sortName.onchange = function () {
  console.log(data.cards)
  if(sortName.checked){
    const sorted = data.cards.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    for (let i=0; i < data.cards.length; i++) {
      document.querySelectorAll('[data-testid = "img"]')[i].src = sorted[i].img //sólo estaba esta línea
      document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + sorted[i].type
      document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + sorted[i].name_short
      document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + sorted[i].name
      document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + sorted[i].value
      document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + sorted[i].meaning_up
      document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + sorted[i].meaning_rev

    } 
    console.log(data.cards);
  }
  
  if(!sortName.checked){
 
    const reversed = data.cards.reverse(function (a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    for (let i=0; i < data.cards.length; i++) {
      document.querySelectorAll('[data-testid = "img"]')[i].src = reversed[i].img //sólo estaba esta línea
      document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + reversed[i].type
      document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + reversed[i].name_short
      document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + reversed[i].name
      document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + reversed[i].value
      document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + reversed[i].meaning_up
      document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + reversed[i].meaning_rev
  
    } 
  }
}
