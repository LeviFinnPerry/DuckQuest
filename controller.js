import { getRandAll, getRandName, getRandQuack } from './randomize.js';
import { validateName, validateQuacktribute, validatePersonality, createChar } from './validation.js';

export const quackInputs = new Array;
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
quackInputs[0] = quicknessInput;
quackInputs[1] = uglyInput;
quackInputs[2] = arcanaInput;
quackInputs[3] = coolInput;
quackInputs[4] = kismetInput;

// Get references to buttons
const randNameButton = document.getElementById('rand-name');
const randQuackButton = document.getElementById('rand-quack')
const randAllButton = document.getElementById('random-all')
const createCharButton = document.getElementById('createChar')

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to the Button fields
    randNameButton.addEventListener('click', () => getRandName(nameInput));
    randQuackButton.addEventListener('click', () => getRandQuack());
    randAllButton.addEventListener('click', () => getRandAll(nameInput, heartInput, psycheInput));
    createCharButton.addEventListener('click', () => createChar());


    // Add event listeners to the input fields
    nameInput.addEventListener('change', () => validateName(nameInput, nameInput.value));
    heartInput.addEventListener('change', () => validatePersonality(heartInput, psycheInput, "h"));
    psycheInput.addEventListener('change', () => validatePersonality(heartInput, psycheInput, "p"));

    quicknessInput.addEventListener('change', () => validateQuacktribute(quicknessInput, "q"));
    uglyInput.addEventListener('change', () => validateQuacktribute(uglyInput, "u"));
    arcanaInput.addEventListener('change', () => validateQuacktribute(arcanaInput, "a"));
    coolInput.addEventListener('change', () => validateQuacktribute(coolInput, "c"));
    kismetInput.addEventListener('change', () => validateQuacktribute(kismetInput, "k"));
});



