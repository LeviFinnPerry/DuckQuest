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
        this.Personality = [
            this.Kudos,
            this.Heart,
            this.Psyche,
            this.Armour,
        ];
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

    set quacktributes(quacktributes) {
        this.Quacktributes = quacktributes;
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

