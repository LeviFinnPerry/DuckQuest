import { CharTemplate } from './model.js';

const optionDropDowns = document.getElementsByClassName('option-dd');
const statDropDowns = document.getElementsByClassName('stat-dd');
const nameField = document.getElementById('duck-name');
const charTemplate = new CharTemplate();

const quacktributeMap = {
    "q": "quickness",
    "u": "ugly",
    "a": "arcana",
    "c": "cool",
    "k": "kismet"
};

// Function to validate Name input
export function validateName(input, name) {
    if (name === "") {
        alert('Please enter a name');
    } else {
        updateName(input, name);
    }
}

// Function to validate All Quacktributes
export function validateAllQuacktributes(inputs, values) {
    // Extract the values from the input elements
    const quacktributes = inputs.map(values);

    // Check if there are exactly 5 unique values
    const uniqueValues = new Set(quacktributes);
    if (uniqueValues.size !== 5) {
        alert('There should be 5 unique quacktributes');
        return; // Exit the function if not exactly 5 unique values
    }

    // Check if all values are between 1 and 5
    const validValues = quacktributes.every(value => value >= 1 && value <= 5);

    if (!validValues) {
        alert('Each quacktribute must have values between 1 and 5');
    }
    else {
        updateQuacktributes(inputs, values);
    }
}

// Function to validate Quacktribute input
export function validateQuacktribute(input, key) {
    const quacktributes = charTemplate.quacktributes();

    if (!quacktributeMap[key] || quacktributes[quacktributeMap[key]] < 1 || quacktributes[quacktributeMap[key]] > 5) {
        alert('Invalid key or value');
        input.value = "";
    } else {
        updateQuacktribute(key, input.value);
    }
}

// Function to validate Personality input
export function validatePersonality(heartInput, psycheInput, key) {
    if (key === "h") {
        updatePsyche(heartInput, psycheInput);
    } else if (key === "p") {
        updateHeart(psycheInput, heartInput);
    }
}

// Function to update the quacktribute value based on the key
function updateQuacktribute(key, value) {
    if (quacktributeMap.hasOwnProperty(key)) {
        charTemplate[quacktributeMap[key]] = value;
    } else {
        alert('Invalid quacktribute key');
    }
}

export function updateQuacktributes(inputs, values) {
    // Create an array to store the updated quacktribute values
    const updatedQuacktributes = values; // Make a copy of the original values

    // Loop through the inputs and update the corresponding quacktribute values
    inputs.forEach(input => {
        const key = input.getAttribute("data-key"); // Get the data-key attribute to identify the quacktribute
        const value = parseInt(input.value);

        if (quacktributeMap[key] !== undefined && !isNaN(value)) {
            updatedQuacktributes[quacktributeMap[key]] = value;
        }
    });

    // Update the quacktribute values in the charTemplate instance
    charTemplate.quacktributes(updatedQuacktributes);
}

// Updates the name for the user
function updateName(inputField, name) {
    charTemplate.name(name);
    inputField.value = name;
}

// Function to update "Psyche" based on "Heart" input
function updatePsyche(heartInput, psycheInput) {
    const heartValue = parseInt(heartInput.value);

    if (heartValue >= 1 && heartValue <= 10) {
        psycheInput.value = 10 - heartValue;
    } else {
        heartInput.value = '';
        psycheInput.value = '';
        alert('Please enter a valid value for Heart (between 1 and 10).');
    }
    charTemplate.psyche(psycheInput.value);
    charTemplate.heart(heartInput.value);
}

// Function to update "Heart" based on "Psyche" input
function updateHeart(psycheInput, heartInput) {
    const psycheValue = parseInt(psycheInput.value);

    if (psycheValue >= 1 && psycheValue <= 10) {
        heartInput.value = 10 - psycheValue;
        charTemplate.heart = heartInput.value;
    } else {
        psycheInput.value = '';
        heartInput.value = '';
        alert('Please enter a valid value for Psyche (between 1 and 10).');
    }
    charTemplate.psyche(psycheInput.value);
    charTemplate.heart(heartInput.value);
}