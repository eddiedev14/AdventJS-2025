// Día 11 - Advent JS

/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
    // Variables that represent relevant characters
    const giftSymbol = "*";
    const cameraSymbol = "#";

    // Counter
    let safeGifts = 0;

    // Iterate over the array (rows and cols)
    const rows = warehouse.length;
    const cols = warehouse[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const char = warehouse[row][col];
            
            // Validate if is it a gift characters
            if (char === giftSymbol) {
                let up = null;
                let right = null;
                let down = null;
                let left = null;

                // Get the characters in the 4 positions securely
                if (row - 1 >= 0) up = warehouse[row - 1][col]
                if (col + 1 < cols) right = warehouse[row][col + 1]
                if (row + 1 < rows) down = warehouse[row + 1][col]
                if (col - 1 >= 0) left = warehouse[row][col - 1];
                
                const isUnsafe = [up, right, down, left].includes(cameraSymbol);
                if (!isUnsafe) safeGifts++;
            }
        }
    }

    return safeGifts;
}

//* Tests
console.log(findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]))

console.log(findUnsafeGifts([
  '...',
  '.*.',
  '...'
]))

console.log(findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]))

console.log(findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]))