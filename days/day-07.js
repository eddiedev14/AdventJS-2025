// Día 7 - Advent JS

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
    let counter = 1;
    let tree = ""

    for (let i = 1; i <= height; i++) {
        // Calculate the number of characters and spaces in each row
        const charactersNumber = 2 * i - 1;
        const spacesNumber = height - i;
        let row = " ".repeat(spacesNumber)

        // Iterate through each character in that row to decide which character to place
        for (let j = 0; j < charactersNumber; j++) {
            row += counter % frequency === 0 ? ornament : "*";
            counter++;
        }
        
        tree += row + "\n"
    }

    tree += " ".repeat(height - 1) + "#"
    return tree
}

//* Tests
console.log(drawTree(5, 'o', 2))
console.log(drawTree(3, '@', 3))
console.log(drawTree(4, '+', 1))