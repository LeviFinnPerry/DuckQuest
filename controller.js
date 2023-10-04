import { newCharObj, charOptions, statOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, disableOp, statsDisabled} from './view.js';
import { setRandOps, setRandName, setRandStats } from './randomize.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const charName = document.getElementById('name-input');
const charOps = document.getElementsByClassName('option-dd');
const statOps = document.getElementsByClassName('stat-dd');
const createChar = document.getElementById('createChar');
const randOpsBtns = document.getElementsByClassName('rand-op-btn');
const randStatsBtn = document.getElementById('rand-stats-btn');
const randNameButton = document.getElementById('rand-name');
const randAllBtn = document.getElementById('random-all');
const statsTemplateVals = document.getElementById('stats-temp-vals');

//Pop up elements
const createCharPopup = document.getElementById('char-popup')
const popUpCharDetails = document.getElementsByClassName("popup-content");
//
console.log(popUpCharDetails);

randAllBtn.addEventListener("click", function(){
    setRandName();
    setRandStats();
    for(let i = 0; i < 4; i++) {
        randOpsBtns[i].click();
    }
    statsDisabled(true);
});

statsTemplateVals.addEventListener("click", function() {
    fillStatsDropDown(statOptions);
    statsDisabled(false);
});

randNameButton.addEventListener("click", setRandName);

randStatsBtn.addEventListener("click", function(){
    setRandStats();
    statsDisabled(true);
});

const randOps = document.querySelectorAll('.rand-op-btn');
    randOps.forEach(randOps => {
    randOps.addEventListener('click', function() {
        setRandOps(this.id);
    });
});

//Disable option
for(let i = 0; i < statOps.length; i++) {
    statOps[i].addEventListener("change", function() {
        disableOp(statOps[i]);
    })
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

