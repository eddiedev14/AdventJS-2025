// Día 21 - Advent JS

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
    function cleanFullRows() {
        const cols = warehouse[0].length;
        let row = warehouse.length - 1;

        while (row >= 0) {
            if (warehouse[row].every(cell => cell === "#")) {
                warehouse.splice(row, 1)
                warehouse.unshift(new Array(cols).fill("."))
            } else {
                row--;
            }
        }
    }

    // Iterate over each column in which a gift is left
    drops.forEach((colIndex) => {
        // Search the column for the first "." from the bottom up
        for (let row = warehouse.length - 1; row >= 0; row--) {
            const item = warehouse[row][colIndex];

            // If the "." is found, the gift is given; otherwise, it is ignored
            if (item === ".") {
                warehouse[row][colIndex] = "#";
                cleanFullRows();
                break;
            }
        }
    });

    return warehouse;
}

console.log(
    clearGifts(
        [
            [".", ".", "."],
            [".", ".", "."],
            ["#", ".", "#"],
        ],
        [1],
    ),
);

console.log(
    clearGifts(
        [
            [".", ".", "#"],
            ["#", ".", "#"],
            ["#", ".", "#"],
        ],
        [0, 1, 2],
    ),
);
