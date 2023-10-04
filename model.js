//Selectable values
export const statOptions = {
    stats: [15,14,13,12,10,8]
};

export const randNameOptions = {
    firstName: [
        "Apple", "Drake", "Cherry", "Manu", "Rouen",
        "Zachary", "Sirius", "Feather", "Yolko", "Mallory",
        "Webster", "Honeydew", "Wade", "Chick", "Squirt",
        "Bubbles", "Moby", "Eggbert", "Wing-Wing", "Bill"
    ],
    lastName: [
        "Bluebill", "Skywaddler", "Pintail", "Aflac", "Aylesbury",
        "Grimaud", "Duclair", "Grape-Asker", "Mallard", "Reed",
        "Canard", "Blekingeanka", "Flapper", "Rubberduck", "Thunderbill",
        "Duckington", "Wisequack", "Cobb", "Frankenduck", "Puddlefoot"
    ]
};

export class CharTemplate {
    constructor() {
        this.name = "";
        this.kudos = ""; // Add the "Kudos" property
        this.heart = ""; // Add the "Heart" property
        this.psyche = ""; // Add the "Psyche" property
        this.armour = ""; // Add the "Armour" property
        this.quickness = ""; // Add the "Quickness" property
        this.ugly = ""; // Add the "Ugly" property
        this.arcana = ""; // Add the "Arcana" property
        this.cool = ""; // Add the "Cool" property
        this.kismet = ""; // Add the "Kismet" property
    }
}


//Creates new object, loops through setting the values with user entered values
export function newCharObj(allChosenValues) {
    let newChar = new CharTemplate;
    var setValues = function(newChar){
        let i = 0;
        Object.keys(newChar).forEach(function(key) {
        newChar[key] = allChosenValues[i];
        i++;
        });
    };
    setValues(newChar);
    console.log(newChar);
};


