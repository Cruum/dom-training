/* ------------------------------------ */
/* --- Exercice 1 --- */
const button = document.querySelector("#first-button");
let textInvis = document.querySelector("#test")
button.addEventListener('click', addInvis);
// console.log(textInvis);
function addInvis(text) {
    textInvis.classList.toggle('invisibilities');
}
// console.log(addInvis( text-invis));
/* ------------------------------------ */
/* --- Exercice 2 --- */
const value = document.getElementById("ex2-scroll-value");

window.addEventListener('scroll', function () {
    value.textContent = Math.round(window.scrollY);
})


/* ------------------------------------ */
/* --- Exercice 3 --- */

const list = document.getElementById('ex3-animals');
const buttonAnimals = document.getElementById("buttonAnimals");
buttonAnimals.addEventListener('click', function () {
    // const firstchild = list.firstElementChild;
    list.appendChild(list.firstElementChild);
});


/* ------------------------------------ */
/* --- Exercice 4 --- */
const buttonColor = document.querySelector('#buttonColor');

const color = ["red", "blue", "green"];
let indexColors = 0;

buttonColor.addEventListener('click', function () {
    this.style.background = color[indexColors % color.length];
    indexColors++;
});

/* ------------------------------------ */
/* --- Exercice 5 --- */

// const getRandomColor = () => {
const buttons = document.querySelectorAll("#ex5 .button");
buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        button.style.backgroundColor = "#" + randomColor;
    });
});

/* ------------------------------------ */
/* --- Exercice 6 --- */


const htmlP = document.getElementById("ex6-paragraph");
console.log(htmlP);
const txt = htmlP.dataset.label;
console.log(txt);
let i 	= 0 ;
function showLetters()
{
  let timeOut ;
  if(i < txt.length)
	{
	  htmlP.innerHTML += `<span>${txt[i]}</span>` ;
	  timeOut = setTimeout(showLetters,50)
	  i++
	}
	else
	{
	  clearTimeout(timeOut);
	  console.log("end")
	}
}
showLetters();


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

const todoli = document.createElement("li")
todoli.classList.add("task-list-task")
/* ------------------------------------ */
/* --- Exercice 8 --- */
