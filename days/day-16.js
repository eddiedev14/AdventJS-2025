// Día 16 - Advent JS

/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
    if (gifts.length === 0) return 0; // No gifts
    let sleighsNeeded = 1;
    let currentWeight = 0;

    // Iterate through the gift array
    for (let i = 0; i < gifts.length; i++) {
        const giftWeight = gifts[i];
        if (giftWeight > maxWeight) return null;

        // Check if the gift can be carried on the current sleigh
        if (currentWeight + giftWeight <= maxWeight) {
            currentWeight += giftWeight;
        } else {
            // Add a new sled and start its base weight
            sleighsNeeded += 1;
            currentWeight = giftWeight;
        }
    }

    return sleighsNeeded;
}

//* Tests
console.log(packGifts([2, 3, 4, 1], 5));
console.log(packGifts([3, 3, 2, 1], 3));
console.log(packGifts([1, 1, 1, 1], 2));
console.log(packGifts([5, 6, 1], 5));
console.log(packGifts([], 10));
