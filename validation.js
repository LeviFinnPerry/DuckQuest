import { CharTemplate } from './model.js';
import { quackInputs } from './controller.js'
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
export function validateAllQuacktributes(num) {
    // Check if there are exactly 5 unique values
    const uniqueValues = new Set(num);
    if (uniqueValues.size !== 5) {
        alert('There should be 5 unique quacktributes');
        return; // Exit the function if not exactly 5 unique values
    }

    // Check if all values are between 1 and 5
    const validValues = num.every(value => value >= 1 && value <= 5);

    if (!validValues) {
        alert('Each quacktribute must have values between 1 and 5');
    } else {
        // Call the updateQuacktributes function with the quacktributes array
        updateQuacktributes(num);
    }
}


// Function to validate Quacktribute input
export function validateQuacktribute(inputField, key) {
    const value = parseInt(inputField.value);

    if (isNaN(value)) {
        // Handle the case where the input value is not a valid number
        console.error("Invalid input value:", inputField.value);
        return;
    }

    // Validate that the value is within an acceptable range (you can adjust the range)
    if (value < 0 || value > 6) {
        // Handle the case where the input value is out of range
        console.error("Input value is out of range:", value);
        inputField.value = "";
        return;
    }
    updateQuacktribute(key, value)
    for (let i = 0; i < charTemplate.quacktributes.length; i++) {
        if (charTemplate.quacktributes[i] == -1) {
            return;
        }
    }
    validateAllQuacktributes(charTemplate.quacktributes)
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
    switch (key) {
        case "q":
            charTemplate.quickness = value;
            charTemplate.Quacktributes[0] = value;
            break;
        case "u":
            charTemplate.ugly = value;
            charTemplate.Quacktributes[1] = value;
            break;
        case "a":
            charTemplate.arcana = value;
            charTemplate.Quacktributes[2] = value;
            break;
        case "c":
            charTemplate.cool = value;
            charTemplate.Quacktributes[3] = value;
            break;
        case "k":
            charTemplate.kismet = value;
            charTemplate.Quacktributes[4] = value;
            break;
        default:
            // Handle the case when an invalid key is provided
            console.error("Invalid quack stat key:", key);
            break;
    }
}

export function updateQuacktributes(values) {
    // Create an array to store the updated quacktribute values
    const updatedQuacktributes = values; // Make a copy of the original values

    // Loop through the inputs and update the corresponding quacktribute values
    for (let i = 0; i < quackInputs.length; i++) {
        quackInputs[i].value = updatedQuacktributes[i];
    }

    // Update the quacktribute values in the charTemplate instance
    charTemplate.quacktributes = updatedQuacktributes;
}

// Updates the name for the user
function updateName(inputField, name) {
    charTemplate.name = name;
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
    charTemplate.psyche = psycheInput.value;
    charTemplate.heart = heartInput.value;
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
    charTemplate.psyche = psycheInput.value;
    charTemplate.heart = heartInput.value;
}