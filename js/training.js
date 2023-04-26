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
    value.textContent = Math.round( window.scrollY );
}) 


/* ------------------------------------ */
/* --- Exercice 3 --- */

const list =  document.getElementById('ex3-animals');
const buttonAnimals=document.getElementById("buttonAnimals");
buttonAnimals.addEventListener('click', function() {
    // const firstchild = list.firstElementChild;
    list.appendChild(list.firstElementChild);
});


/* ------------------------------------ */
/* --- Exercice 4 --- */
const buttonColor = document.querySelector('#buttonColor');

const color = ["red", "blue","green"];
let indexColors = 0;

// buttonColor.addEventListener("click", changerCouleur);
//       function changerCouleur() {
//         textbackgroundcolor.style.color = color;
// }


buttonColor.addEventListener('click', function() {
    this.style.background = color[indexColors%color.length] ;
indexColors++;
  });

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
