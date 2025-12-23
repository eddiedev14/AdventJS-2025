/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
    const rows = map.length;
    const cols = map[0].length;

    let startRow, startCol;
    let totalGifts = 0;

    // 1. Buscar S y contar regalos
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (map[r][c] === "S") {
                startRow = r;
                startCol = c;
            }
            if (map[r][c] === "G") {
                totalGifts++;
            }
        }
    }

    // 2. Matriz de visitados
    const visited = map.map(row => row.map(() => false));

    // 3. Cola (posición + pasos)
    const queue = [[startRow, startCol, 0]];
    visited[startRow][startCol] = true;

    let foundGifts = 0;
    let totalSteps = 0;

    // 4. Mientras haya cosas por explorar
    while (queue.length > 0) {
        const [r, c, steps] = queue.shift();

        // 5. Si es un regalo, sumamos pasos
        if (map[r][c] === "G") {
            foundGifts++;
            totalSteps += steps;
        }

        // 6. Movimientos simples
        const moves = [
            [r - 1, c], // arriba
            [r + 1, c], // abajo
            [r, c - 1], // izquierda
            [r, c + 1], // derecha
        ];

        for (const [nr, nc] of moves) {
            if (
                nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < cols &&
                map[nr][nc] !== "#" &&
                !visited[nr][nc]
            ) {
                visited[nr][nc] = true;
                queue.push([nr, nc, steps + 1]);
            }
        }
    }

    return foundGifts === totalGifts ? totalSteps : -1;
}

//* Tests
console.log(
    minStepsToDeliver([
        ["S", ".", "G"],
        [".", "#", "."],
        ["G", ".", "."],
    ]),
);

console.log(
    minStepsToDeliver([
        ["S", "#", "G"],
        ["#", "#", "."],
        ["G", ".", "."],
    ]),
);

console.log(minStepsToDeliver([["S", "G"]]));
