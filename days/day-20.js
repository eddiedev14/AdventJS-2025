// Día 20 - Advent JS

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
    // Iterate over each column in which a gift is left
    drops.forEach(colIndex => {
        // Search the column for the first "." from the bottom up
        for (let row = warehouse.length - 1; row >= 0; row--) {
            const item = warehouse[row][colIndex];

            // If the "." is found, the gift is given; otherwise, it is ignored
            if (item === ".") {
                warehouse[row][colIndex] = "#";
                break;
            }
        }
    })

    return warehouse;
}


//* Tests
console.log(
    dropGifts(
        [
            ['.', '.', '.'],
            ['.', '#', '.'],
            ['#', '#', '.']
        ],
        [0]
    )
)

console.log(
    dropGifts(
        [
            ['.', '.', '.'],
            ['#', '#', '.'],
            ['#', '#', '#']
        ],
        [0, 2]
    )
)

console.log(
    dropGifts(
        [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ],
        [0, 1, 2]
    )
)

console.log(
    dropGifts(
        [
            ['#', '#'],
            ['#', '#']
        ],
        [0, 0]
    )
)