// Día 4 - Advent JS

/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
    // Use regular expression to split correctly when it finds [] and at least one character inside
    const partes = code.match(/\[[^\]]+\]/g).map(parte => parte.slice(1, -1))
    
    // Invalid PIN
    if (partes.length < 4) return null

    const digitos = []

    partes.forEach((parte, indice) => {
        let numeroBase = parte[0]
        
        // If the previous digit is repeated
        if (numeroBase === "<") {
            digitos.push(digitos[indice - 1])
            return;
        }

        numeroBase = parseInt(numeroBase);

        // Get the operations
        const operaciones = parte.slice(1).split("")
        if (operaciones.length === 0) {
            digitos.push(numeroBase)
            return;
        }

        // Apply all the operations to the base number and use mod 10
        let digito = operaciones.reduce((acc, op) => op === "+" ? ++acc : --acc, numeroBase) % 10;

        // Adjust so that it always remains between 0 and 9
        if (digito < 0) digito += 10;
        digitos.push(digito)
    })

    return digitos.join("")
}

//* Tests
console.log(decodeSantaPin('[1++][2-][3+][<]'))
console.log(decodeSantaPin('[9+][0-][4][<]'))
console.log(decodeSantaPin('[1+][2-]'))