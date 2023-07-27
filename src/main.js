//import { example } from './data.js';
import data from './data/tarot/tarot.js';

//Método para navegar entre archivos HTML con JS.
document.getElementById("btn2").addEventListener("click", function(nav){
  nav.preventDefault;
  window.location.href='/baraja.html?reading';
});

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

//bucle querySelector para la imagen al frente de las cards
//bucle querySelector para el texto al reverso de las cards

const $select = document.querySelector("#arcans-filter")

$select.addEventListener("change", filtrar)

function filtrar() {
  //const stringKeys = Object.keys(data.cards);
  const selectedOption = $select.selectedIndex;
  if (selectedOption === 0){
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
  }
  if (selectedOption === 1) {
    const minorArcans = data.cards.filter(obj => obj.type === "minor");
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
            <li data-testid="description">Description: </li>\
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
    
  } /*esto quién sabe qué imprime :( */
  /*for (let i = 0; i < data.cards.length; i++) {
    //data.cards[i] = Object.values(data.cards[i])
    //console.log(data.cards[i]); hasta aquí, imprime todos los values del object cards
  }*/
  if (selectedOption === 2 ) {
    const majorArcans = data.cards.filter(obj => obj.type === "major");
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
            <li data-testid="description">Description: </li>\
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

//$select.addEventListener('click', function(select) {
/*document.querySelector("#arcans-filter").addEventListener('click', function(select) {
  select.preventDefault;
  if (Option.value === "minor-arcans") {
    for (let i = 0; i < data.cards.length; i++ ) {
      console.log(data.cards.value[i])
    }
  }
})*/

/*const arcanFilter = () => {
  for (let i = 0; i < data.cards.length; i++ ) {
    console.log(data.cards.value[i])
  }
  return 'example';
};*/