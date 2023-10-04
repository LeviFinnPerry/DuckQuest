import { charOptions, personalityOptions, randNameOptions} from './model.js';
import { fillStatsDropDown, updateRandName} from './view.js';

const charOps = document.getElementsByClassName('option-dd');

//For quacktribute randomisation
function getRandQuack() {
    let quacktributes = Object.values(statOptions);
    let attributes = [];
    for (let i = 0; i < quacktributes[0].length; i++) {
        let randNumVal = Math.floor(Math.random() * quacktributes[0].length);
        attributes[i] = randNumVal;
    }
    fillStatsDropDown(attributes);
}

//Get Personality Values
//Name
export function getRandName() {
    let vals = Object.values(randNameOptions);
    let randNumFn = Math.floor(Math.random() * vals[0].length);
    let randNumLn = Math.floor(Math.random() * vals[1].length);
    let randFullName = vals[0][randNumFn].concat(" ", vals[1][randNumLn]);
    console.log(randFullName);
    updateRandName(randFullName);
};

//Kudos, Heart and Psyche Values
export function getPersonality() {
    let vals = Object.values(personalityOptions);

}

