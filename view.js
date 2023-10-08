const optionDropDowns = document.getElementsByClassName('option-dd');
const statDropDowns = document.getElementsByClassName('stat-dd');
const nameField = document.getElementById('duck-name');



// Fills char option dropdown options
export function fillOptionsDropDown(opObj) {
    const keys = Object.keys(opObj);
    const objArrays = Object.entries(opObj);

    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < objArrays[i][1].length; j++) {
            let newOption = new Option(objArrays[i][1][j]);
            optionDropDowns[i].add(newOption);
        }
    }
}

// Fill character stats drop downs options
export function fillStatsDropDown(statObj) {
    const objArrays = Object.entries(statObj);
    for (let i = 0; i < 5; i++) {
        statDropDowns[i].innerHTML = "";
        for (let j = 0; j < 5; j++) {
            let newStatOption = new Option(objArrays[0][1][j]);
            statDropDowns[i].add(newStatOption);
            statDropDowns[j].value = objArrays[0][1][j];
        }
    }
    return objArrays[0][1];
}

// Disable stat drop down options
export function disableOp(val) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (statDropDowns[i].options[j].value == val.value) {
                statDropDowns[i].options[j].disabled = true;
            }
        }
    }
}

export function statsDisabled(val) {
    for (let i = 0; i < statDropDowns.length; i++) {
        statDropDowns[i].disabled = val;
    }
}
