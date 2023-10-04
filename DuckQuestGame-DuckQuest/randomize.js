import { charOptions, randNameOptions} from './model.js';
import { fillStatsDropDown, updateRandName} from './view.js';

const charOps = document.getElementsByClassName('option-dd');

//Not needed
function statRandRoll() {
    const fourD6Roll = Array.from({length: 4}, () => Math.floor(Math.random() * (7 - 1) + 1));
    const minToRemove = fourD6Roll.indexOf(Math.min(...fourD6Roll));
    const updatedFourD6 = fourD6Roll.slice();
    updatedFourD6.splice(minToRemove, 1);
    const sumOfDice = updatedFourD6[0] + updatedFourD6[1] + updatedFourD6[2];
    const rollInfo = [fourD6Roll, updatedFourD6, sumOfDice];
    return rollInfo;
};
//not needed
function generateRandStats() {
    const diceRolled = [];
    const diceAdjusted = [];
    const randResult = [];
    for(let i = 0; i < 6; i++) {
        let diceInfo = statRandRoll();
        diceRolled.push(diceInfo[0]);
        diceAdjusted.push(diceInfo[1]);
        randResult.push(diceInfo[2]);
    }
    const randStatsOptions = {
        stats: [...randResult]
    }
    const allRandData = [diceRolled,diceAdjusted,randStatsOptions];
    return allRandData;
};

//Useful
export function setRandStats() {
    const randStatData = generateRandStats();
    fillStatsDropDown(randStatData[2]);
    // displayRandRollInfo(randStatData);
};

//??
export function setRandOps(clickedBtn) {
    for (let i = 0; i < charOps.length; i++) {
        let opValues = Object.values(charOptions);
        let randNum = Math.floor(Math.random() * opValues[clickedBtn].length);
        charOps[clickedBtn].value = opValues[clickedBtn][randNum];
    };
};

//Edit
export function setRandName() {
    let vals = Object.values(randNameOptions);
    let randNumFn = Math.floor(Math.random() * vals[0].length);
    let randNumLn = Math.floor(Math.random() * vals[1].length);
    let randFullName = vals[0][randNumFn].concat(" ", vals[1][randNumLn]);
    console.log(randFullName);
    updateRandName(randFullName);
};

