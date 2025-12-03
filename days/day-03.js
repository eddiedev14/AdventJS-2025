// Día 3 - Advent JS

/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  // If the size is lower than 2, return empty string
  if (size < 2) {
    return "";
  }

  let gift = "";

  // Add the first line
  gift += `${symbol.repeat(size)}\n`

  // Draw the gift body
  for (let i = 1; i < size - 1; i++) {
    gift += `${symbol}${" ".repeat(size - 2)}${symbol}\n`;
  }

  // Add the last line
  gift += `${symbol.repeat(size)}`

  return gift
}

//* Test #1
const g1 = drawGift(4, '*')
console.log(g1)

//* Test #2
const g2 = drawGift(3, '#')
console.log(g2)

//* Test #3
const g3 = drawGift(2, '-')
console.log(g3)

//* Test #4
const g4 = drawGift(1, '+')
console.log(g4)