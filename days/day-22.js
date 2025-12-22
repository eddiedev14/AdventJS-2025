// Día 22 - Advent JS

/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
    let row = null;
    let col = null;

    const rows = maze.length;
    const cols = maze[0].length;

    // Find the initial position
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === "S") {
                row = i;
                col = j;
            }
        }
    }

    // Create array with the visited positions
    const visited = maze.map(row => row.map(() => false))

    //* DFS
    function DFS(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || maze[row][col] === "#" || visited[row][col]) {
            return false;
        }

        if (maze[row][col] === "E") {
            return true;
        }

        visited[row][col] = true;

        return (
            DFS(row - 1, col) || // Up
            DFS(row + 1, col) || // Bottom
            DFS(row, col - 1) || // Left
            DFS(row, col + 1)    // Right
        )
    }

    return DFS(row, col)
}

//* Tests
console.log(
    canEscape([
        ["S", ".", "#", "."],
        ["#", ".", "#", "."],
        [".", ".", ".", "."],
        ["#", "#", "#", "E"],
    ]),
);

console.log(
    canEscape([
        ["S", "#", "#"],
        [".", "#", "."],
        [".", "#", "E"],
    ]),
);

console.log(canEscape([["S", "E"]]));

console.log(
    canEscape([
        ["S", ".", ".", ".", "."],
        ["#", "#", "#", "#", "."],
        [".", ".", ".", ".", "."],
        [".", "#", "#", "#", "#"],
        [".", ".", ".", ".", "E"],
    ]),
);

console.log(
    canEscape([
        ["S", ".", "."],
        [".", ".", "."],
        ["#", "#", "#"],
        [".", ".", "E"],
    ]),
);
