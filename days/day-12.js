// Día 12 - Advent JS
/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
    let hp1 = 3;
    let hp2 = 3;

    // Calculate the rounds number
    const rounds = Math.max(elf1.length, elf2.length)

    // Create a mapper object with the damage done according to each action, taking an elf as reference
    const damagesMap = {
        "A": { "A": 1, "B": 0, "F": 1 },
        "B": { "A": 0, "B": 0, "F": 0 },
        "F": { "A": 2, "B": 2, "F": 2 }
    }

    for (let i = 0; i < rounds; i++) {
        const movement1 = elf1[i];
        const movement2 = elf2[i];

        // Calculate the damage they do to each other
        const damageTo2 = damagesMap[movement1][movement2];
        const damageTo1 = damagesMap[movement2][movement1];

        hp1 -= damageTo1;
        hp2 -= damageTo2;

        if (hp1 <= 0 || hp2 <= 0) break; 
    }

    // Simultaneous death draw
    if (hp1 <= 0 && hp2 <= 0) return 0;

    // Winners
    if (hp1 > hp2) return 1;
    if (hp2 > hp1) return 2;
    
    // Same health
    if (hp1 === hp2) return 0;
}

//* Tests
console.log(elfBattle('A', 'B'))
console.log(elfBattle('F', 'B'))
console.log(elfBattle('AAB', 'BBA'))
console.log(elfBattle('AFA', 'BBA'))
console.log(elfBattle('AFAB', 'BBAF'))
console.log(elfBattle('AA', 'FF'))