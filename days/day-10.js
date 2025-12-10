// Día 10 - Advent JS

/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
    let depth = 0;
    let max = 0;

    const depthOperations = {
        "[": (depth) => depth + 1,
        "]": (depth) => depth - 1
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        depth = depthOperations[char](depth);

        if (depth > max) {
            max = depth;
        }else if(depth < 0){
            return -1
        }
    }

    return depth === 0 ? max : -1;
}

//* Tests
console.log(maxDepth('[]'))
console.log(maxDepth('[[]]'))
console.log(maxDepth('[][]'))
console.log(maxDepth('[[][]]'))
console.log(maxDepth('[[[]]]'))
console.log(maxDepth('[][[]][]'))

// ! Errors (-1)
console.log(maxDepth(']['))
console.log(maxDepth('[[['))
console.log(maxDepth('[]]]'))
console.log(maxDepth('[][]['))