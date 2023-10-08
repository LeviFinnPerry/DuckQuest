import { getRandAll, getRandName, getRandQuack } from './randomize.js';
import { validateName, validateQuacktribute, validatePersonality } from './validation.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

//Personality input fields
const nameInput = document.getElementById("duck-name");
const heartInput = document.getElementById('heart');
const psycheInput = document.getElementById('psyche');

// Quacktribute input fields
const quicknessInput = document.getElementById('quickness');
const uglyInput = document.getElementById('ugly');
const arcanaInput = document.getElementById('arcana');
const coolInput = document.getElementById('cool');
const kismetInput = document.getElementById('kismet');

// Get references to buttons
const randNameButton = document.getElementById('rand-name');
const randQuackButton = document.getElementById('rand-quack')
const randAllButton = document.getElementById('random-all')
const createCharButton = document.getElementById('createChar')


// Add event listeners to the Button fields
randNameButton.addEventListener('click', getRandName);
randQuackButton.addEventListener('click', getRandQuack);
randAllButton.addEventListener('click', getRandAll);
createCharButton.addEventListener('click', newCharacter);


// Add event listeners to the input fields
nameInput.addEventListener('change', validateName);
heartInput.addEventListener('change', validatePersonality(this, "h"));
psycheInput.addEventListener('change', validatePersonality(this, "p"));

quicknessInput.addEventListener('change', validateQuacktribute(this, "q"));
uglyInput.addEventListener('change', validateQuacktribute(this, "u"));
arcanaInput.addEventListener('change', validateQuacktribute(this, "a"));
coolInput.addEventListener('change', validateQuacktribute(this, "c"));
kismetInput.addEventListener('change', validateQuacktribute(this, "k"));

//Pop up elements
//const createCharPopup = document.getElementById('char-popup')
//const popUpCharDetails = document.getElementsByClassName("popup-content");
//console.log(popUpCharDetails);

