// Día 9 - Advent JS

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
    // Variables for definiting relevent characters
    const robotRenoSymbol = "@";
    const successSymbol = "*";
    const obstacleSymbol = "#";

    // Convert the board to a bidimensional array
    const boardArray = [];
    const rows = board.split("\n").filter(row => row !== "");
    rows.forEach(row => boardArray.push(row.split("")))
    
    // Get the row and column where the reno is located
    let renoRowIndex = boardArray.findIndex(row => row.includes(robotRenoSymbol));
    if (renoRowIndex === -1) return;
    let renoColIndex = boardArray[renoRowIndex].findIndex(col => col === robotRenoSymbol);
    
    //* Movements
    const movesArray = moves.toLowerCase().split("");

    // Create an object with the actions to be performed depending on the type of Movement
    const movementsOperations = {
        "u": () => renoRowIndex--,
        "r": () => renoColIndex++,
        "d": () => renoRowIndex++,
        "l": () => renoColIndex--
    }
    
    // Iterate through each movement
    for (let i = 0; i < movesArray.length; i++) {
        const moveType = movesArray[i];
        movementsOperations[moveType]();

        // Check if the reno left the board
        if (renoRowIndex < 0 || renoRowIndex >= boardArray.length || renoColIndex < 0 || renoColIndex >= boardArray[0].length) return "crash"

        // Validate the character type in which it is located
        const characterFound = boardArray[renoRowIndex][renoColIndex];
        if (characterFound === obstacleSymbol) return "crash";
        if (characterFound === successSymbol) return "success"; 
    }

    return 'fail';
}

//* Tests
const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'))
console.log(moveReno(board, 'U'))
console.log(moveReno(board, 'RU'))
console.log(moveReno(board, 'RRRUU'))
console.log(moveReno(board, 'DD'))
console.log(moveReno(board, 'UUU'))
console.log(moveReno(board, 'RR'))