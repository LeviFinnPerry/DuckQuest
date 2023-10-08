import { randNameOptions, CharTemplate} from './model.js';
import { updateQuacktribute, validateName,  } from './validation.js'

const charOps = document.getElementsByClassName('option-dd');
const charTemplate = CharTemplate;

//For quacktribute randomisation
export function getRandQuack() {
    const num = [1, 2, 3, 4, 5];
    // Shuffle the array to randomize the order
    const shuffledNumbers = num.sort(() => Math.random() - 0.5);
    const [q, u, a, c, k] = shuffledNumbers;  
    updateQuacktribute();
    
};

//Get random name
export function getRandName() {
    let vals = Object.values(randNameOptions);
    let randNumFn = Math.floor(Math.random() * vals[0].length);
    let randNumLn = Math.floor(Math.random() * vals[1].length);
    let randFullName = vals[0][randNumFn].concat(" ", vals[1][randNumLn]);
    updateRandName(randFullName);
    charTemplate.name(randFullName);
};

//Gets random personality
function getRandPersonality() {

}

export function getRandAll() {
    getRandName();
    getRandQuack();
    getRandPersonality();
}

