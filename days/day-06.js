// Día 6 - Advent JS

/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
    // Obtain the number of left and right gloves grouped by color
    const glovesByColor = gloves.reduce((obj, glove) => {
        const { hand, color } = glove;
        if (!obj[color]) obj[color] = { "L": 0, "R": 0 }
        obj[color][hand]++
        return obj 
    }, {})

    const res = [];

    // Calculate the number of pairs for each color
    for (const color in glovesByColor) {
        const { L, R } = glovesByColor[color];
        const pairs = Math.min(L, R)
        if (pairs > 0) res.push(...new Array(pairs).fill(color))
    }

    return res;
}

//* Tests
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

console.log(matchGloves(gloves))

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

console.log(matchGloves(gloves2))

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

console.log(matchGloves(gloves3))