import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Método para navegar entre archivos HTML con JS.
document.getElementsByName("deck")[0].addEventListener("click", function(e){
e.preventDefault;
window.location.href='/baraja.html?deck';
});

//console.log(example, data);
