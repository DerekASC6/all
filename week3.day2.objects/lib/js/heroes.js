// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa 
// Note: The first hero is provided for you

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

// const someHero = {
//     name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }Piccolo

const Piccolo = {
    name:"Piccolo",
    type:"Namekian",
    difficulty:"2/3",
    img:"https://banner2.kisspng.com/20180511/lwe/kisspng-piccolo-goku-frieza-vegeta-gotenks-5af5dac0cbd9a7.629394081526061760835.jpg",
    saying:"Destructo Disc",
    story:"He is first seen as the reincarnation of the evil Piccolo Daimaō in chapter #161 Son Goku , published in Weekly Shōnen Jump magazine on February 9, 1988, making him a demon and archrival of the protagonist Son Goku. However, it is later revealed that he is a member of an extraterrestrial humanoid species called Namekians, those able to create the series' eponymous wish-granting Dragon Balls. After losing to Goku, Piccolo decides to team up with him and his friends in order to defeat newer, more dangerous threats. He also trains Goku's first child Gohan in martial arts, with the two forming a strong bond.  ",
    abilities:[{
        name:"special beam cannon",
        description:"A devastatingly powerful energy-based attacks; the most prominent being his signature Kamehameha ,in which Goku launches a blue energy blast from his palms."
    },
    {
        
    },
    {
        name:"regeneration",
        description:"Able to regrow arms and lims"
    },
    {
        
    }
    ]
}

const krillin = {
    name:"krillin",
    type:"human",
    difficulty:"2/3",
    img:"https://banner2.kisspng.com/20180608/xyq/kisspng-krillin-piccolo-goku-vegeta-gohan-krillin-5b1a81f473fbd7.4708626615284638604751.jpg",
    saying:"Destructo Disc",
    story:"Originally a jealous and selfish person, Krillin did not respect rules when confronted with Roshi's training. After a short arch-rivalry between the two (years later, Krillin even admits that he hated Goku at first), he becomes Goku's best friend and his selfish and jealous personality becomes more kind-hearted and generous (although he still has slight selfish and jealous traits after his reform).  ",
    abilities:[{
        name:"Kamehameha",
        description:"A devastatingly powerful energy-based attacks; the most prominent being his signature Kamehameha ,in which Goku launches a blue energy blast from his palms."
    },
    {
        
    },
    {
        name:"Destructo Disc",
        description:"Unlike energy blasts, the Destructo Disc can actually injure enemies many times the wielder's power level, such as being able to cut off Frieza's tail when energy blasts from the likes of Vegeta and Gohan proved ineffective. In the anime, Krillin uses it once on Perfect Cell, with the disc shattering on Cell's neck, due to his aura stopping Krillin's ki disc's edge from piercing Cell's body."
    },
    {
        name: " solar flare",
        description:"The Solar Flare is performed by the user placing their hands close to the center of their face with the fingers spread toward their eyes. The user then calls out the name of the technique, which provokes a white light to fire out and blind everything watching except the user, since they are projecting the light. This technique is defensive rather than offensive, and is mainly used as way to gain the upper hand, or in order to make hasty retreat, or to set up for a more complicated attack without fear of interruption."
    }
    ]
}




const Goku = {
    name:"Goku",
    type:"sayain",
    difficulty:"3/3",
    img:"https://simg.nicepng.com/png/small/117-1175253_ultra-instinct-goku-by-hazeelart-dbr20h3-goku-ultra.png",
    saying:"kakarot",
    story:"Initially believed to have been born on Earth, Goku later learns that he is a member of an extraterrestrial warrior race called the Saiyans, which is also the reason for his superhuman strength, and his birth name is Kakarot . As Goku grows up, he becomes the Earth's mightiest warrior and protects his adopted home planet from those who seek to destroy it. Goku is depicted as carefree and cheerful when at ease, but quickly serious and strategic-minded when in battle and also enthusiastic to fight.  ",
    abilities:[{
        name:"Kamehameha",
        description:"A devastatingly powerful energy-based attacks; the most prominent being his signature Kamehameha ,in which Goku launches a blue energy blast from his palms."
    },
    {
        name:"spirit bomb",
        description:"The Spirit Bomb is an ancient technique used by Goku which he learned from King Kai. The Spirit Bomb is said to be one of the strongest techniques ever created. The attack is used by absorbing the energy of anything living, and willing to give up energy."
    
    },
    {
        name:"instant transmission",
        description:"This action is usually accompanied by the user placing his index and middle fingers on his forehead to help him concentrate, though if extra time is taken the technique can be performed without this aid."
    },
    {
        name: " solar flare",
        description:"The Solar Flare is performed by the user placing their hands close to the center of their face with the fingers spread toward their eyes. The user then calls out the name of the technique, which provokes a white light to fire out and blind everything watching except the user, since they are projecting the light. This technique is defensive rather than offensive, and is mainly used as way to gain the upper hand, or in order to make hasty retreat, or to set up for a more complicated attack without fear of interruption."
    }
    ]
}




const lucio = {
    name:"lucio",
    type:"defense",
    difficulty:"2/3",
    img:"lucio.png",
    saying:"WORDS",
    story:"story",
    abilities:[{
        name:"punch",
        description:"punches someone"
    }
    ]
}
const sombra = {
    name:"sombra",
    type:"offense",
    difficulty:"1/3",
    img:"sombra.png",
    saying:"EVERYTHING CAN BE HACKED… AND EVERYONE.",
    story:"One of the world's most notorious hackers, Sombra uses information to manipulate those in power.Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
    abilities:[
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
        {
            name:"HACK",
            description:"Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
        },
        {
            name:"STEALTH",
            description:"Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
        },
        {
            name:"TRANSLOCATOR",
            description:"Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
        },
        {
            name:"EMP",
            description:"Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
        },
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        }
    ]
}

// 2) Create an array called "heroes" and store all of the hero object in the array

// 3) In "index.html", create a form that allows the user to create 
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

// 4) At the bottom of "events.js", give the "Submit" button an on click event handler 


// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add 
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website
