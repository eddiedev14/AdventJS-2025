// Día 18 - Advent JS

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
    const rows = board.length;
    const cols = board[0].length;

    const directions = [
        [0, 1],    // horizontal
        [1, 0],    // vertical
        [1, 1],    // right diagonal
        [1, -1],    // left diagonal
    ]

    function checkLine(row, col, color, stepRow, stepCol) {
        for (let k = 1; k < 4; k++) {
            const newRow = row + stepRow * k;
            const newCol = col + stepCol * k;

            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || board[newRow][newCol] !== color) return false
        }

        return true;
    }

    // Go through the light board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const color = board[i][j];
            if (color === ".") continue;

            //* Validate 4 in row
            for (const [dr, dc] of directions) {
                if (checkLine(i, j, color, dr, dc)) return true
            }
        }
    }

    return false;
}

//* Tests
console.log(
    hasFourInARow([
        ['R', '.', '.', '.'],
        ['.', 'R', '.', '.'],
        ['.', '.', 'R', '.'],
        ['.', '.', '.', 'R']
    ])
);

console.log(
    hasFourInARow([
        ['.', '.', '.', 'G'],
        ['.', '.', 'G', '.'],
        ['.', 'G', '.', '.'],
        ['G', '.', '.', '.']
    ])
);

console.log(
    hasFourInARow([
        ['R', 'R', 'R', 'R'],
        ['G', 'G', '.', '.'],
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
    ])
);

console.log(
    hasFourInARow([
        ['R', 'G', 'R'],
        ['G', 'R', 'G'],
        ['G', 'R', 'G']
    ])
)