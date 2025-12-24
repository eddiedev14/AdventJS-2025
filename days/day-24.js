// Día 24 - Advent JS

/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    // Different roots
    if (tree1.value !== tree2.value) return [false, tree1.value];

    function validateNodes(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false
        if (left.value !== right.value) return false;

        return (validateNodes(left.left, right.right) && validateNodes(right.left, left.right))
    }

    const isMirror = validateNodes(tree1.left, tree2.right) && validateNodes(tree2.left, tree1.right);
    return [isMirror, tree1.value]
}

//* Tests
const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
}

const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' }
}

const tree4 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree2))
console.log(isTreesSynchronized(tree1, tree3))
console.log(isTreesSynchronized(tree1, tree4))
console.log(
    isTreesSynchronized(
        { value: '🎅' },
        { value: '🧑‍🎄' }
    )
)