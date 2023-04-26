/* ------------------------------------ */
/* --- Exercice 1 --- */
const button = document.querySelector("#first-button");
let textInvis = document.querySelector("#test")
button.addEventListener('click', addInvis);
// console.log(textInvis);
function addInvis(text){
    textInvis.classList.toggle('invisibilities');
}
// console.log(addInvis( text-invis));
/* ------------------------------------ */
/* --- Exercice 2 --- */
const value = document.getElementById("ex2-scroll-value");

window.addEventListener('scroll', function(){
    value.textContent = window.scrollY;
}) 
// .innerHeight


/* ------------------------------------ */
/* --- Exercice 3 --- */


/* ------------------------------------ */
/* --- Exercice 4 --- */


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
