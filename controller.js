import { newCharObj, charOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, statsDisabled } from './view.js';
import { generateRandQuack, setRandName, setRandStats } from './randomize.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);
// Create an array to track selected Quacktributes and name
const selectedQuacktributes = [];
const selectedName;

// Get references to the input fields
const quicknessInput = document.getElementById('quickness');
const uglyInput = document.getElementById('ugly');
const arcanaInput = document.getElementById('arcana');
const coolInput = document.getElementById('cool');
const kismetInput = document.getElementById('kismet');
const heartInput = document.getElementById('heart');
const psycheInput = document.getElementById('psyche');
const nameInput = document.getElementById('duck-name');

// Get references to input buttons
const randNameButton = document.getElementById('rand-name');
const randKudosButton = docuument.getElementById('rand-kudos');



// Add event listeners to the Button fields
randNameButton.addEventListener('click', randomizeName);
randKudosButton.addEventListener('click', generateRandQuack)

// Add event listeners to the input fields
nameInput.addEventListener('change', validatNameInput);
quicknessInput.addEventListener('change', validateQuacktributeInput);
uglyInput.addEventListener('change', validateQuacktributeInput);
arcanaInput.addEventListener('change', validateQuacktributeInput);
coolInput.addEventListener('change', validateQuacktributeInput);
kismetInput.addEventListener('change', validateQuacktributeInput);
heartInput.addEventListener('change', updatePsyche);
psycheInput.addEventListener('change', updateHeart);

//Pop up elements
const createCharPopup = document.getElementById('char-popup')
const popUpCharDetails = document.getElementsByClassName("popup-content");
console.log(popUpCharDetails);

randAllBtn.addEventListener("click", function () {
    setRandName();
    setRandStats();
    for (let i = 0; i < 4; i++) {
        randOpsBtns[i].click();
    }
    statsDisabled(true);
});

//Function to validate Name input
function validatNameInput(event) {
    const inputField = event.target;
    const nameValue = inputField.value;
    if (nameValue == "") {
        alert('Please enter a name')
    }
    else {
        selectedName.push(nameValue);
    }
}
// Function to validate Quacktribute input
function validateQuacktributeInput(event) {
  const inputField = event.target;
  const quacktributeValue = parseInt(inputField.value);

  // Check if the value is between 1 and 5 and not a duplicate
  if (quacktributeValue >= 1 && quacktributeValue <= 5 && !selectedQuacktributes.includes(quacktributeValue)) {
    // Valid input
    selectedQuacktributes.push(quacktributeValue);
  } else {
    // Invalid input, reset the input field
    inputField.value = '';
    alert('Please enter a unique number between 1 and 5.');
  }
}

// Function to update "Psyche" based on "Heart" input
function updatePsyche() {
  const heartValue = parseInt(heartInput.value);

  // Ensure "Heart" is within the valid range
  if (heartValue >= 1 && heartValue <= 10) {
    // Update "Psyche" to equal 10 minus "Heart"
    psycheInput.value = 10 - heartValue;
  } else {
    // If "Heart" is outside the valid range, reset both fields
    heartInput.value = '';
    psycheInput.value = '';
    alert('Please enter a valid value for Heart (between 1 and 10).');
  }
}

// Function to update "Heart" based on "Psyche" input
function updateHeart() {
  const psycheValue = parseInt(psycheInput.value);

  // Ensure "Psyche" is within the valid range
  if (psycheValue >= 1 && psycheValue <= 10) {
    // Update "Heart" to equal 10 minus "Psyche"
    heartInput.value = 10 - psycheValue;
  } else {
    // If "Psyche" is outside the valid range, reset both fields
    psycheInput.value = '';
    heartInput.value = '';
    alert('Please enter a valid value for Psyche (between 1 and 10).');
  }
}

//Creates array of current selected/entered values, this is passed to model
createChar.addEventListener("click", function() {
    const allChosenValues = [charName.value];
    if(charName.value ===""){
        alert('Please enter a name');
    } else {
        createCharPopup.classList.add("open-char-popup");
        for (let i =0; i < charOps.length; i++) {
            allChosenValues.push(charOps[i].value);
        }
        for (let i =0; i < statOps.length; i++) {
            allChosenValues.push(statOps[i].value);
        }
        newCharObj(allChosenValues);
        console.log(allChosenValues);

        for (let i = 0; i < (popUpCharDetails.length+1); i++) {
        popUpCharDetails[i].innerHTML = (popUpCharDetails[i].innerHTML + "   " + allChosenValues[i])
        }
    }
});

