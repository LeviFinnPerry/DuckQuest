import { randNameOptions} from './model.js';
import { validateAllQuacktributes, validateName,  } from './validation.js'

const charOps = document.getElementsByClassName('option-dd');

//For quacktribute randomisation
export function getRandQuack(inputs) {
    const num = [1, 2, 3, 4, 5];

    // Fisher-Yates shuffle algorithm
    for (let i = num.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [num[i], num[j]] = [num[j], num[i]]; // Swap elements at i and j
    }

    validateAllQuacktributes(num);
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
}

export function getRandAll(nameInput, q, u, a, c, k, heartInput, psycheInput) {
    inputs = [q, u, a, c, k];
    getRandName(nameInput);
    getRandQuack(inputs);
    getRandPersonality(heartInput, psycheInput);
}

