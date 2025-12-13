// Día 13 - Advent JS

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
    // Variables that control the movement of the gift
    let row = 0;
    let col = 0;

    // Object with the operations to be performed depending on the movement
    const movementOperatons = {
      "^": () => row--,
      ">": () => col++,
      "v": () => row++,
      "<": () => col--
    }

    // Set to save the positions traveled
    const visitedPosition = new Set(['0,0']);

    // Following the path of the gift
    const rows = factory.length;
    const cols = factory[0].length;

    let symbol = factory[row][col];

    while (symbol !== ".") {
        // Perform operation
        movementOperatons[symbol]();

        // Out of bounds
        if (row < 0 || row >= rows || col < 0 || col >= cols) return "broken"

        // Check whether that position has already been visited (loop) and, if not, add it to the set
        const position = `${row},${col}`;
        const isVisited = visitedPosition.has(position);
        if (isVisited) return "loop";
        visitedPosition.add(position);
        symbol = factory[row][col];
    }

    return "completed"
}

//* Tests
console.log(runFactory([
  '>>.'
]))

console.log(runFactory([
  '>>>'
]))

console.log(runFactory([
  '>><'
]))

console.log(runFactory([
  '>>v',
  '..<'
]))

console.log(runFactory([
  '>>v',
  '<<<'
]))

console.log(runFactory([
  '>v.',
  '^..'
]))

console.log(runFactory([
  'v.',
  '^.'
]))