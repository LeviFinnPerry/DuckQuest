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
export const statOptions = {
    personality: ["Kudos", "Heart", "Psyche", "Armour"],
    quack: ["Quickness", "Ugly", "Arcana", "Cool", "Kismet"]
};

//Template of all on Character Screen
export class CharTemplate {
    constructor() {
        this.Name = "";
        this.Kudos = -1; 
        this.Heart = -1; 
        this.Psyche = -1; 
        this.Armour = -1; 
        this.Quickness = -1; 
        this.Ugly = -1; 
        this.Arcana = -1; 
        this.Cool = -1;
        this.Kismet = -1; 
        this.Quacktributes = [
            this.Quickness,
            this.Ugly,
            this.Arcana,
            this.Cool,
            this.Kismet,
        ];
    }
    //Getter and Setter for Quacktributes
    get quacktributes() {
        return this.Quacktributes;
    }

    set quacktributes(q, u, a, c, k) {
        this.Quacktributes = [q, u, a, c, k];
        this.quickness(q);
        this.ugly(u);
        this.arcana(a);
        this.cool(c);
        this.kismet(k);
    }

    // Getter and Setter for 'name'
    get name() {
        return this.Name;
    }

    set name(value) {
        this.Name = value;
    }

    // Getter and Setter for 'Kudos'
    get kudos() {
        return this.Kudos;
    }

    set kudos(value) {
        this.Kudos = 1;
    }

    // Getter and Setter for 'Heart'
    get heart() {
        return this.Heart;
    }

    set heart(value) {
        this.Heart = value;
    }

    // Getter and Setter for 'Psyche'
    get psyche() {
        return this.Psyche;
    }

    set psyche(value) {
        this.Psyche = value;
    }

    // Getter and Setter for 'Armour'
    get armour() {
        return this.Armour;
    }

    set armour(value) {
        this.Armour = value;
    }

    // Getter and Setter for 'Quickness'
    get quickness() {
        return this.Quickness;
    }

    set quickness(value) {
        this.Quickness = value;
    }

    // Getter and Setter for 'Ugly'
    get ugly() {
        return this.Ugly;
    }

    set ugly(value) {
        this.Ugly = value;
    }

    // Getter and Setter for 'Arcana'
    get arcana() {
        return this.Arcana;
    }

    set arcana(value) {
        this.Arcana = value;
    }

    // Getter and Setter for 'Cool'
    get cool() {
        return this.Cool;
    }

    set cool(value) {
        this.Cool = value;
    }

    // Getter and Setter for 'Kismet'
    get kismet() {
        return this.Kismet;
    }

    set kismet(value) {
        this.Kismet = value;
    }
};


// Create new character object
export function newCharacter() {

};
