// Use only let and const
// Immutable array top of the file

const warrior = [
    {
        name: 'Jujin Take',
        type: 'Ninja',
        weapon: 'Shuriken',
        agility: 79
    },
    {
        name: 'Viggo Rusen',
        type: 'Viking',
        weapon: 'Swing blade',
        agility: 60
    },
    {
        name: 'Ro Rake',
        type: 'Samurai',
        weapon: 'Boken',
        agility: 82
    }
];

const screamWarriors = () => {
    console.log(warrior);
    // global variable warriors available
    warriors.map((warrior) => {
        // warrior.agility is available in this scope
        if (warrior.agility === 60) {
            // new agility variable is available in this scope
            let agility = warrior.agility;
            console.log(`${warrior.name}, who is a ${warrior.type} has an agility of ${agility}`);
        }
    })
}

screamWarriors()