// Día 14 - Advent JS

/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {string[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
    for (const key in workshop) {
        const item = workshop[key];
        
        // BASE CASE
        if (item === gift) {
            return [key] 
        }

        // RECURSIVE CASE
        if (typeof item === "object" && item !== null) {
          const path = findGiftPath(item, gift)

          if (path.length > 0) {
              return [key, ...path]
          }
        }
    }

    return []
}


//* Tests
const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

console.log(findGiftPath(workshop, 'train'))
console.log(findGiftPath(workshop, 'switch'))
console.log(findGiftPath(workshop, 'car'))
console.log(findGiftPath(workshop, 'doll'))
console.log(findGiftPath(workshop, 'plane'))