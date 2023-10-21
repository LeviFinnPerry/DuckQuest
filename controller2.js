document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the selected character from localStorage
    var characterData = localStorage.getItem('newCharacter');
    var selectedCharacter = characterData ? JSON.parse(characterData) : null;

    var selectedCharacterElement = document.getElementById('selected-character');
    var characterImagesElement = document.getElementById('character-images');

    if (selectedCharacter) {
        document.getElementById('char-name').textContent = selectedCharacter[0];
        document.getElementById('char-kudos').textContent = selectedCharacter[1]; 
        document.getElementById('char-heart').textContent = selectedCharacter[2]; 
        document.getElementById('char-psyche').textContent = selectedCharacter[3];
        document.getElementById('char-armour').textContent = selectedCharacter[4];
        document.getElementById('char-quickness').textContent = selectedCharacter[5];
        document.getElementById('char-ugly').textContent = selectedCharacter[6]; 
        document.getElementById('char-arcana').textContent = selectedCharacter[7];
        document.getElementById('char-cool').textContent = selectedCharacter[8]; 
        document.getElementById('char-kismet').textContent = selectedCharacter[9];
        ;
    } else {
        // Provide an option for a blank character
        selectedCharacterElement.innerHTML = '<p>No character selected.</p>';
    }

    //Character information
    var Quackstories = [
        {
            name: 'Acrobat Archer',
            description: 'You come from a long line of Amazon archers but if your grandmother could see what you do with a bow, she would turn in her grave. With your bendy body and a quiver full of trick shots, you pull off feats that would turn a wood elf green with envy.',
            heart: 6,
            psyche: 4,
            unique_item: 'Composite Trick-Shot Bow',
            equipment: ['Quiver full of arrows', 'arm guards', 'immaculate braided hair', 'eyebrows on fleek', 'athletic clothing'],
            quirks: ['Quack Shot', 'Contortionist', 'Brave'],
            image: 'acrobat_archer.jpg'
        },
        {
            name: 'Berserker Werebeast',
            description: 'Born with the courage of an eagle, the strength of a panther, and the power of animal whispering. You feel at home in the deep wilderness and have a natural affinity for animals great and small. Rumor has it you were raised by fowlbears and take animal empathy to a whole new level, sometimes becoming one yourself!',
            heart: 7,
            psyche: 3,
            unique_item: 'Hood of Duckwolf',
            equipment: ['Grandmother’s axe', 'tooth and skull necklace', 'armrings', 'barely-hide armor'],
            quirks: ['Hirsute', 'Animal Lover', 'Shapechanger'],
            image: 'berserker_werebeast.jpg'
        },
        {
            name: 'Cthul-Loon Cleric',
            description: 'You’re an esoteric priest of one of the oldest Cults of Quax, although these days folks are more interested in the New Age cults, and the congregation is dwindling. With a zeal for the Old Ones that borders on insanity, you seek to convert others so they too can enjoy the metaphysical benefits of traditional occult worship. You must hurry though; the end of the world is nigh!',
            heart: 4,
            psyche: 6,
            unique_item: 'Sceptre of the Quacken',
            equipment: ['Clerical vestments', 'funny hat', 'abridged tome of the Old Ones'],
            quirks: ['Religious Zealot', 'Many Tentacles', 'Slightly Mad'],
            image: 'cthul-loon_cleric.jpg'
        },
        {
            name: 'Dread Warlord',
            description: 'You’re a former employee of the late Syntharka, Ducklord of the Dread Marshes. It was a thankless job, with terrible pay and no perks except for the piecemeal armor and (t)rusty broadsword. Now you are free to carve your own destiny!',
            heart: 8,
            psyche: 2,
            unique_item: 'Great Helm of the Ducklord',
            equipment: ['Trusty broadsword', 'slightly curved dagger', 'heavy metal shield', 'affordable boots', 'piecemeal exotic armor'],
            quirks: ['Duck Past', 'Soldier of Fortune', 'Grim Demeanor'],
            image: 'dread_warlord.jpg'
        },
        {
            name: 'Elite Hunter',
            description: 'A member of the fabled Silver Company, you are sworn to protect the creatures of the forest and your homeland. You possess woodcraft and survival skills passed down through generations of woodland warriors. But the Silver Company disbanded after the War of the Things, and now you are a hunter for hire.',
            heart: 6,
            psyche: 4,
            unique_item: 'Hooded cloak of the Silver Company',
            equipment: ['Hunter’s garb', 'broadhead arrows', 'bowie knife', 'large net', 'trail nuts'],
            quirks: ['Sharp Shooter', 'Survivalist', 'Highly-strung'],
            image: 'elite_hunter.jpg'
        },
        {
            name: 'Feral Animist',
            description: 'A hippy wilderlands duck, you were raised in an enclave of nature-worshipping dryads. You’re an animal lover, a tree-hugger, a drinker of elderberry wine, and a smoker of sweetleaf! You are often sought out for your wisdom and powers of healing.',
            heart: 3,
            psyche: 7,
            unique_item: 'Everful Jug of Elderberry Wine',
            equipment: ['Floral headdress', 'bangles', 'assorted woodland companions', 'full herb pouches', 'a few small animal companions'],
            quirks: ['Healing Touch', 'Animal Attraction', 'Flower Arranging'],
            image: 'feral_animist.jpg'
        },
        {
            name: 'Gallant Rogue',
            description: 'At home on the shadiest streets of Dank-Morduck, you are a former wizard’s apprentice that has turned to a life of... more earthly pleasures. Your cunning exploits quickly earned you the lifelong enmity of the Thieves’ Guild. A folk hero with a heart of gold, you are renowned for your quick wit and masterful swordplay.',
            heart: 6,
            psyche: 4,
            unique_item: 'Rapier "Cat’s Whisker"',
            equipment: ['Noble cape', 'fine clothes and jewelry', 'thieving tools', 'hidden dirk', 'magical potion', 'a three-eyed snail'],
            quirks: ['Cutting Remarks', 'Master Duelist', 'Sentimental'],
            image: 'gallant_rogue.jpg'
        },
        {
            name: 'Highland Bardbarian',
            description: 'Proud and brave, you are a short- tempered Clansduck from the Highlands, ready to bring the house down with bagpipes and a claymore.The only thing more terrifying than the screams as you pump your bagpipes is the view when the wind catches your kilt.It’s a kind of magick.',
            heart: 8,
            psyche: 2,
            unique_item: 'Bagpipes of McDoom!',
            equipment: ['Claymore', 'Tam O’Shanter (wool hat with a pom-pom)', 'kilt and sporran', 'haggis'],
            quirks: ['Lone Piper', 'Tells Ghost Stories', 'Grudge Bearer'],
            image: 'highland_bardbarian.jpg'
        },
        {
            name: 'Irate Archmage',
            description: 'Bards tell of a notorious archmage, who cursed a town and took residence beneath it in a maze-like dungeon of their own making. Then some meddlesome Adventurers evicted you (after defeating your minions, decoding your oh-so-clever puzzles, and destroying your laboratory). Worse, the party’s rogue stole your heart.',
            heart: 2,
            psyche: 8,
            unique_item: 'Staff of Wacky Wizzardry',
            equipment: ['Spectacles of Beholding', 'assorted magical rings and talismans'],
            quirks: ['Arcane Addict', 'Curio Collector', 'Fiery Temper'],
            image: 'irate_archmage.jpg'
        },
        {
            name: 'Judicial Champion',
            description: 'You are a professional executioner hired to determine guilt or innocence by trial of combat. A famous ex-gladiator, you won your freedom and then quickly fell into this job because you needed the coin. Because justice favors the wealthy, your services are sought after by nobles that transgress the law.',
            heart: 8,
            psyche: 2,
            unique_item: 'Bastard Sword of Judgment',
            equipment: ['Resplendent noble garb with embroidery', 'colorful feathers and precious gemstones'],
            quirks: ['Street Lawyer', 'Dirty Fighter', 'Big Spender'],
            image: 'judicial_champion.jpg'
        },
        {
            name: 'Karateka Kid',
            description: 'Bullied by a gang of kids, an old duck took you under his wing and taught you self-defense (and how to clean things). With your new skills you have taken to a life of climbing craggy cliffs, defeating fierce warriors, and rescuing princesses from evil warlords. This is the way of the Karateka.',
            heart: 6,
            psyche: 4,
            unique_item: 'Lotus Headband',
            equipment: ['Karategi (clothes)', 'Yin Yang necklace', 'Broom (staff)', 'Black Belt', 'Cloth', 'Turtle Wax'],
            quirks: ['Cleaning Machine', 'Bonsai Tree Gardener', 'Hero in a Half Shell'],
            image: 'karateka_kid.jpg'
        },
        {
            name: 'Lyrical Swashbuckler',
            description: 'You’re a bold, poetic soul with a sword at your hip and a sea shanty on your lips. You rescue damsels in distress and defend the weak and oppressed, with a swagger that astounds foes and makes onlookers swoon. You tell tall tales of derring-do, and all of them are starring you!',
            heart: 7,
            psyche: 3,
            unique_item: 'Lute of looting',
            equipment: ['Flamboyant clothing', 'feathered hat', 'rapier wit', 'songbook', 'tuning fork'],
            quirks: ['Acrobatic Swordplay', 'Virtuoso Musician', 'Incorrigible Flirt'],
            image: 'lyrical_swashbuckler.jpg'
        },
        {
            name: 'Midnight Avenger',
            description: 'You have a very particular set of skills; skills you have acquired over a very long career. During the day you are mild-mannered and unassuming. In the dead of night, you are the shadow, you are the terror… you are the avenger!',
            heart: 6,
            psyche: 4,
            unique_item: 'Sabre of Swift Justice',
            equipment: ['Dark Clothing', 'Cape', 'Utility Belt', 'Lots of Daggers'],
            quirks: ['Secret Identity', 'Vengeful Nature', 'Blade Master'],
            image: 'midnight_avenger.jpg'
        },
        {
            name: 'Ninja Stealth Cyborg',
            description: 'You are a forgotten remnant of the Robot Wars, although you don’t talk about that much, since those battles were centuries ago. Originally programmed to assassinate with cold precision, the passing years have granted spiritual growth and inner peace. You are the wave, and you are the ocean.',
            heart: 7,
            psyche: 3,
            unique_item: 'Awesome Power Blade',
            equipment: ['Cybernetic enhancements', 'electric shuriken', 'smoke bombs', 'caltrops', 'repair kit', 'quack grenades', 'sleeping dust', 'shadow armor', 'whistle'],
            quirks: ['Killing Machine', 'Zen Master', 'Heart of Gold'],
            image: 'ninja_stealth_cyborg.jpg'
        },
        {
            name: 'Old Soldier',
            description: 'You have survived to a ripe old age in an inherently dangerous profession. Despite the ailments of being "elderly" – bad back, dicky-ticker, water on the knee, old war wounds, etc. – you have an extraordinary amount of experience in "not dying". Your fighting style consists mainly of not being in harm’s way, thus taking advantage of opportunity when it knocks.',
            heart: 8,
            psyche: 2,
            unique_item: 'Standard Issue Cudgel',
            equipment: ['Battered heavy armor', 'shield', 'knapsack', 'army knife', 'flint and steel', 'iron rations'],
            quirks: ['Dog of War', 'Jaded', 'Mighty Blow'],
            image: 'old_soldier.jpg'
        },
        {
            name: 'Paladin Psion',
            description: 'A peacekeeper and guardian, you are a member of an ancient, almost forgotten order of mystic-warrior monks from far, far away. Through training and discipline, you have developed incredible mental and physical powers. Recently you have become the guardian of a small duckling with psionic potential unlike any you have ever seen.',
            heart: 5,
            psyche: 5,
            unique_item: 'Holy Power Sword',
            equipment: ['Robes', 'tunic', 'boots', 'belt', 'backpack'],
            quirks: ['Mind Tricks', 'Sensitive Soul', 'Mechanical Aptitude'],
            image: 'paladin_psion.jpg'
        },
        {
            name: 'Quixotic Knight',
            description: 'A paragon of virtue, you are pure of heart and mind. Leading by example, you will make the world a better place and prove that chivalry is not dead. Dedicated to your just and noble cause, you are often blind to the havoc you create.',
            heart: 8,
            psyche: 2,
            unique_item: 'Riding Rooster',
            equipment: ['Suit of field plate armor with spurs', 'shield bearing a coat of arms', 'longsword', 'dagger', 'lance'],
            quirks: ['Code of Chivalry', 'Windmill Tilter', 'Mighty Warrior'],
            image: 'quixotic_knight.jpg'
        },
        {
            name: 'Renegade Monk',
            description: 'Kicked out of the monastery for disrespecting authority, your life of eat, pray, transcribe, has now become eat, pray… fight the forces of darkness! Occasionally you miss the peace and quiet of cloistered life – the gardens, library, and regular meals (especially the cheese and ale) – but you enjoy smiting evil too much to ever go back.',
            heart: 7,
            psyche: 3,
            unique_item: '"Grudge" - Spiked Flail of Faith',
            equipment: ['Good book', 'holy symbol', 'tabard emblazoned with lion rampant'],
            quirks: ['Scholar', 'Habitual Tea Drinker', 'Grudge Holder'],
            image: 'renegade_monk.jpg'
        },
        {
            name: 'Starfighter Pilot',
            description: 'You were recruited by the Interstellar League to defend the Star Frontiers against Zur and the Ko-Duk Armada! Theoretically, you should be dead. How you ended up on this godforsaken backwater planet escapes you, but you blame relative state formulation, Schrödinger\'s duck and quantum decoherence.',
            heart: 6,
            psyche: 4,
            unique_item: 'Blaster Pistol',
            equipment: ['Spacepilot suit', 'utility belt', 'crashed-landed spaceship'],
            quirks: ['Gifted Pilot', 'Reluctant Hero', 'Shoots First'],
            image: 'starfighter_pilot.jpg'
        },
        {
            name: 'Time Bandit',
            description: 'You possess a unique, travel-worn map that shows the location of holes in the fabric of space and time. Leaping through these rifts has already given you a lifetime of adventure and several rare and wondrous objects. Now you’re planning the greatest heist of all time!',
            heart: 4,
            psyche: 6,
            unique_item: 'Map of Folding Space-Time',
            equipment: ['Aviator hat and goggles', 'royal guard uniform', 'recently acquired Crown of AquaLoonia'],
            quirks: ['Kleptomaniac', 'Eccentric', 'Always on Time'],
            image: 'time_bandit.jpg'
        },
        {
            name: 'Ultimate Spelunker',
            description: 'You are an explorer of caves. You love delving into the wild darkness of the underworld; excited by the risk of drowning, hypothermia, rockfall, and foul air. You also excel at tomb-raiding, tunnel-fighting and troll-avoidance.',
            heart: 6,
            psyche: 4,
            unique_item: 'Daddy’s Bullwhip',
            equipment: ['Twin pistols', 'tactical gloves', 'utility belt', 'combat knife', 'back-up knife', 'climbing rope', 'grappling hook', 'chocolate bar', 'lockpick', 'flashlight', 'flares', 'medic kit', 'compass', 'crowbar', 'binoculars', 'backpack', 'so many pouches', 'light clothing'],
            quirks: ['Archaeologist', 'Combat Specialist', 'Fearless Intellectual'],
            image: 'ultimate_spelunker.jpg'
        },
        {
            name: 'Valkyrie Ranger',
            description: 'You are a wilderness expert and have ferocious skill with sword, bow, and spear. As a ranger-scout of the legendary Grey Watch you once patrolled the Hensteeth on your winged-steed, protecting the free folk from dangers beyond the borderlands. That was before The Fall.',
            heart: 7,
            psyche: 3,
            unique_item: 'Spear of Shaking',
            equipment: ['Winged steed', 'magnificent armor', 'shield', 'great helm', 'sword', 'bow', 'long knife', 'amulet of good fortune', 'belt'],
            quirks: ['Battle Angel', 'Unforgiving', 'Noble Bearing'],
            image: 'valkyrie_ranger.jpg'
        },
        {
            name: 'Warlock Keymaster',
            description: 'There are doors: gateways into every parallel and dimensional world beyond imagining. You can unlock these doors. You are the Keymaster.',
            heart: 3,
            psyche: 7,
            unique_item: 'So Many Keys!',
            equipment: ['Belt of many key rings', 'durable hooded robes and sensible footwear', 'keys'],
            quirks: ['Collects Shiny Things', 'Inquisitive', 'Tinker'],
            image: 'warlock_keymaster.jpg'
        },
        {
            name: 'Xyloid Druid',
            description: 'You are a wondrous duck-tree hybrid, from an ancient wood duck sect of druids. With a ligneous facial expression and sinewy limbs, when standing motionless you are often mistaken for foliage. For some mysterious reason, you have branched out from your forest home to see more of the world beyond the trees.',
            heart: 3,
            psyche: 7,
            unique_item: 'High Staff of the Wilderlands',
            equipment: ['Druidic wreath', 'leaf and lichen garment', 'drinking horn'],
            quirks: ['Naturalist', 'Herbalist', 'Lively Spirit'],
            image: 'xyloid_druid.jpg'
        },
        {
            name: 'Yojimbo Robot',
            description: 'You follow the Way of Bushido hard-coded: the 8-bit virtues of the samurai. A shape-shifting demon murdered your daimyo, leaving you without a master. Now you are ronin, a wandering sword for hire.',
            heart: 8,
            psyche: 2,
            unique_item: 'Kinzoku Ō-yoroi (Metal Great Armour)',
            equipment: ['Kimono', 'katana 2k', 'ultra-ion longlife cell', 'hybrid digital-analog processor', 'wanwan wetworks cooler'],
            quirks: ['Shape-shifter', 'Programmed Virtue', 'Code of Honour'],
            image: 'yojimbo_robot.jpg'
        },
        {
            name: 'Zombie Priest',
            description: 'You dream of raising a family – of rotting corpses. A life-long study of Necromancy, the much-maligned college of magick, has given you powers that make your late mummy proud. You don’t just see dead people; you can talk to them too!',
            heart: 2,
            psyche: 8,
            unique_item: 'Pet Python called Fluffy',
            equipment: ['Top hat', 'robes festooned with bones and talismans', 'sacrificial dagger', 'ritual walking stick', 'mojo bag'],
            quirks: ['Morbid', 'Spirit Guide', 'Keeper of Secrets'],
            image: 'zombie_priest.jpg'
        }
    ];

    // Helper function to create a character card
    function createCharacterCard(character) {
        var card = document.createElement('div');
        card.className = 'character-card';

        var image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;

        var details = document.createElement('div');
        details.className = 'character-details';

        var name = document.createElement('h2');
        name.textContent = character.name;

        var description = document.createElement('p');
        description.textContent = character.description;

        var stats = document.createElement('div');
        stats.className = 'character-stats';

        var heartStat = document.createElement('div');
        heartStat.textContent = 'Heart: ' + character.heart;

        var psycheStat = document.createElement('div');
        psycheStat.textContent = 'Psyche: ' + character.psyche;

        var uniqueItem = document.createElement('div');
        uniqueItem.textContent = 'Unique Item: ' + character.unique_item;

        var equipment = document.createElement('div');
        equipment.textContent = 'Equipment: ' + character.equipment.join(', ');

        var quirks = document.createElement('div');
        quirks.textContent = 'Quirks: ' + character.quirks.join(', ');

        stats.appendChild(heartStat);
        stats.appendChild(psycheStat);
        stats.appendChild(uniqueItem);
        stats.appendChild(equipment);
        stats.appendChild(quirks);

        details.appendChild(name);
        details.appendChild(description);
        details.appendChild(stats);

        card.appendChild(image);
        card.appendChild(details);

        return card;
    }

    // Display all characters
    var characterContainer = document.getElementById('character-container');
    characters.forEach(function (character) {
        var card = createCharacterCard(character);
        characterContainer.appendChild(card);
    });
});



