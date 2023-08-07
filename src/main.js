//import { example } from './data.js';
import { sortCards , filterCards, /*luck*/ } from './data.js';
import data from './data/tarot/tarot.js';

//document.addEventListener("DOMContentLoaded",function(event){
//console.log('DOM listo')
//Método para navegar entre archivos HTML con JS.
document.getElementById("btn2").addEventListener("click", function(nav){
  nav.preventDefault;
  window.location.href='/baraja.html?reading';
});

/*--------------Iteración Cartas--------------------------- */


function dataIter(iter){
  for (let i=0; i < iter.length; i++) {
    document.querySelectorAll('[data-testid = "img"]')[i].src = iter[i].img;
    document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + iter[i].type
    document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + iter[i].name_short
    document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + iter[i].name
    document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + iter[i].value
    document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + iter[i].meaning_up
    document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + iter[i].meaning_rev
  } 
  return iter;
}

/*--------------Calculo--------------------------- */

/*
const luckBtn = document.getElementById("btn5")
let userName = document.querySelector('input[name="nombre"]').value;
const userDay = document.querySelector('select[name="day"]').selectedIndex;
const userMonth = document.querySelector('select[name="month"]').selectedIndex;
const userYear = document.querySelector('select[name="year"]').selectedIndex;
console.log(userName);

btn5.onclick = function(){luck(userName)};
*/

/*const luckBtn = document.getElementById("btn5")
luckBtn.onclick =function nombreUsuario(){
  let userName = document.querySelector('input[name="nombre"]').value;
  const userDay = document.querySelector('select[name="day"]').selectedIndex;
  const userMonth = document.querySelector('select[name="month"]').selectedIndex;
  const userYear = document.querySelector('select[name="year"]').selectedIndex;
  //  console.log(userName, userDay, userMonth, userYear);

  let asciiName = 0;
  userName = userName.split('');
  console.log(userName)
  for (let i = 0 ; i < userName.length ; i++) {
    userName[i] = userName[i].charCodeAt() //sustituir cada miembro del array por su propio valor ASCII
    asciiName += parseInt(userName[i]);
  }

  console.log(asciiName);

  const luckyNumber = parseInt(userDay) + parseInt(userMonth) + parseInt(userYear) + asciiName;
  console.log(luckyNumber)
  //if (luckyNumber.toString().length > 2) {
  //}

}*/


/*------------Generación de cards sin filtro -------- */

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

if(document.querySelector('.cards-container')){
  document.querySelector('.cards-container').innerHTML = cardsHTML;
  dataIter(data.cards);
}

/*--------------Filtro--------------------------- */

const $select = document.querySelector("#arcans-filter") //querySelector para el <select> (lista desplegable)
if($select){
  $select.addEventListener("change", filtrar) //Event listener para ejecutar el filtro cuando se cambia la opción del select
}
function filtrar() {
  //bucles para filtrar
  const selectedOption = $select.selectedIndex;
  if (selectedOption === 0) {
    const cardsHTML = filterCards.allArcans(data, selectedOption);
    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
  dataIter(data.cards)
  }
    
  if (selectedOption === 1) {
    const minorArcans = filterCards.minors(data,selectedOption)[0]
    const total = minorArcans.length
    const cardsHTML = filterCards.minors(data, selectedOption)[1];
    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
    dataIter(minorArcans);
  } 

  if (selectedOption === 2 ) {
    const majorArcans = filterCards.majors(data,selectedOption)[0]
    const total = majorArcans.length
    const cardsHTML = filterCards.majors(data, selectedOption)[1];
    document.querySelector('[data-testid="cards-container"]').innerHTML = cardsHTML;
  dataIter(majorArcans);
  }
} 


/*--------------Ordenar--------------------------- */
const sortName = document.getElementById("sort-cards");
if(sortName){
  sortName.onchange = function(){
    const sorted=sortCards(data, sortName.checked)
    dataIter(sorted);
  };
}

/*----------navegación luck.html - luck.html-----------*/

const luckBtn = document.getElementById("btn5")

//let shortLuckyNumber = 0;
if(luckBtn) {
  let shortLuckyNumber = 0;
  luckBtn.onclick = function nombreUsuario(){
    //function nombreUsuario(){
    let userName = document.querySelector('input[name="nombre"]').value;
    const userDay = document.querySelector('select[name="day"]').selectedIndex;
    const userMonth = document.querySelector('select[name="month"]').selectedIndex;
    const userYear = document.querySelector('select[name="year"]').selectedIndex;
  
    let asciiName = 0;
    userName = userName.split('');
    for (let i = 0 ; i < userName.length ; i++) {
      userName[i] = userName[i].charCodeAt() //sustituir cada miembro del array por su propio valor ASCII
      asciiName += parseInt(userName[i]);
    }

    const luckyNumber = parseInt(userDay) + parseInt(userMonth) + parseInt(userYear) + asciiName;
    const strLuckyNumber = luckyNumber.toString();
    let arrLuckyNumber = strLuckyNumber.split('');
    shortLuckyNumber = 79; //la inicializo en 79 para que el bucle inicie
    while (shortLuckyNumber > 78) {
      for (let i = 0; i < arrLuckyNumber.length; i++) {
        shortLuckyNumber = 0; //se inicializa en 0 con el bucle ya iniciado
        arrLuckyNumber[i] = parseInt(arrLuckyNumber[i])
      }
      shortLuckyNumber += arrLuckyNumber.reduce((acc, num) => acc + num, 0)
      arrLuckyNumber = shortLuckyNumber.toString().split('');
    }

    if (shortLuckyNumber < 20) {
      shortLuckyNumber += parseInt(Math.random() * 58);
    }

    window.location.href='/luck.html?shortLuckyNumber'+ shortLuckyNumber;  
  }

  const luckData = document.getElementById('luck-data')
  if (luckData) {
    alert("hola" + shortLuckyNumber)
    document.getElementById("img-back").src = data.cards[shortLuckyNumber].img
    document.querySelector('[id = "type"]').textContent = "Type: " + data.cards[shortLuckyNumber].type
    document.querySelector('[id = "short-name"]').textContent = "Short name: " + data.cards[shortLuckyNumber].name_short
    document.querySelector('[id = "name"]').textContent = "Name: " + data.cards[shortLuckyNumber].name;        
    document.querySelector('[id = "value"]').textContent = "Value: " + data.cards[shortLuckyNumber].value
    document.querySelector('[id = "meaning-up"]').textContent = "Meaning up: " + data.cards[shortLuckyNumber].meaning_up
    document.querySelector('[id = "meaning-rev"]').textContent = "Meaning rev: " + data.cards[shortLuckyNumber].meaning_rev
    console.log(data.cards[shortLuckyNumber])
    alert("hola")
  }
  //document.getElementById("btn5").addEventListener("click", function(nav){
  //nav.preventDefault;
  /*window.location.href='/luck.html?shortLuckyNumber'+shortLuckyNumber;
    console.log(shortLuckyNumber);
    console.log(data.cards[shortLuckyNumber])
    document.querySelector('[data-testid = "img-back"]').src = data.cards[shortLuckyNumber].img*/
  //});
}


/*document.getElementById("btn5").addEventListener("click", function(nav){
  window.location.href='/luck.html?shortLuckyNumber';
});*/

/*------------flip card luck.html------------------*/

//document.querySelector('[data-testid = "img-back"]').src = data.cards[shortLuckyNumber].img

/*--------------Comentarios--------------------------- */
/*
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
//})
