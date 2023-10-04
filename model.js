//Randomised Option Names
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

//Personality names
export const personalityOptions = {
    personality: ["Kudos", "Heart", "Psyche", "Armour"]
};

//Template of all on Character Screen
export class CharTemplate {
    constructor() {
        this.name = "";
        this.Kudos = "1"; 
        this.Heart = ""; 
        this.Psyche = ""; // Add the "Psyche" property
        this.Armour = ""; // Add the "Armour" property
        this.Quickness = ""; // Add the "Quickness" property
        this.Ugly = ""; // Add the "Ugly" property
        this.Arcana = ""; // Add the "Arcana" property
        this.Cool = ""; // Add the "Cool" property
        this.Kismet = ""; // Add the "Kismet" property
    }
}

// Create new character object
export function newCharObj(allChosenValues) {
    let newChar = new CharTemplate();
    let i = 0;

    Object.keys(newChar).forEach(function (key) {
        newChar[key] = allChosenValues[i];
        i++;
    });

    console.log(newChar);
    return newChar;
}
