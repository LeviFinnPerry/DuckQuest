import { randNameOptions} from './model.js';
import { validateAllQuacktributes, validateName, validatePersonality,  } from './validation.js'

const charOps = document.getElementsByClassName('option-dd');
var inputs = [1, 2, 3, 4, 5];
//For quacktribute randomisation
export function getRandQuack() {
    // Fisher-Yates shuffle algorithm
    for (let i = inputs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [inputs[i], inputs[j]] = [inputs[j], inputs[i]]; // Swap elements at i and j
    }
    validateAllQuacktributes(inputs);
}


//Get random name
export function getRandName(input) {
    let vals = Object.values(randNameOptions);
    let randNumFn = Math.floor(Math.random() * vals[0].length);
    let randNumLn = Math.floor(Math.random() * vals[1].length);
    let randFullName = vals[0][randNumFn].concat(" ", vals[1][randNumLn]);
    validateName(input, randFullName);
};

function getRandPersonality(heartInput, psycheInput) {
    // Generate a random number between 1 and 9 for Heart
    const randomHeart = Math.floor(Math.random() * 9) + 1;

    // Calculate Psyche to make it add up to 10
    const randomPsyche = 10 - randomHeart;

    // Update the input values
    heartInput.value = randomHeart;
    psycheInput.value = randomPsyche;

    validatePersonality(heartInput, psycheInput, "p");
}

export function getRandAll(nameInput, heartInput, psycheInput) {
    getRandName(nameInput);
    getRandQuack();
    getRandPersonality(heartInput, psycheInput);
}

