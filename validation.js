import { CharTemplate } from './model.js'

const optionDropDowns = document.getElementsByClassName('option-dd');
const statDropDowns = document.getElementsByClassName('stat-dd');
const nameField = document.getElementById('duck-name');
const charTemplate = new CharTemplate;


//Function to validate Name input
export function validateName(event) {
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
export function validateQuacktribute() {
    const quacktributes = charTemplate.quacktributes();
    if (!quacktributes.includes(-1)) {
        alert('Please assign unique values for each attribute');
    } else {
        const uniqueValues = new Set(quacktributes);
        const isValid = quacktributes.every(value => value >= 1 && value <= 5) && uniqueValues.size === quacktributes.length;

        if (!isValid) {
            alert('Please assign unique values between 1 and 5 for each attribute');
        } else {
            //Is Valid to Continue
        }
    }
}

//Function to valuduate 
export function validatePersonality(event, key) {
    const inputField = event.target;
    const personalityValue = parse.int(inputField.value);
}

export function updateQuacktribute(event, key) {
    const inputField = event.target;
    const quacktributeValue = parseInt(inputField.value);
    if (quacktributeValue > 0 && quacktributeValue <= 5) {
        
        validateQuacktribute();
    }
}

//Updates the name for user
function updateRandName(name) {
    nameField.value = name;
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
createChar.addEventListener("click", function () {
    const allChosenValues = [charName.value];
    if (charName.value === "") {
        alert('Please enter a name');
    } else {
        createCharPopup.classList.add("open-char-popup");
        for (let i = 0; i < charOps.length; i++) {
            allChosenValues.push(charOps[i].value);
        }
        for (let i = 0; i < statOps.length; i++) {
            allChosenValues.push(statOps[i].value);
        }
        newCharObj(allChosenValues);
        console.log(allChosenValues);

        for (let i = 0; i < (popUpCharDetails.length + 1); i++) {
            popUpCharDetails[i].innerHTML = (popUpCharDetails[i].innerHTML + "   " + allChosenValues[i])
        }
    }
});