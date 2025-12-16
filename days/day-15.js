// Día 15 - Advent JS

/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
    if (data.length === 0) return "";

    // Get the keys and values from the data
    const keys = Object.keys(data[0]);
    const rows = data.map(obj => Object.values(obj));

    // Determine which key index to use for sorting
    const columnIndex = keys.indexOf(sortBy);
    const columnDataType = typeof rows[0][columnIndex];

    // Sort the array depending on the data type
    const sorters = {
        string: (a, b) => a[columnIndex].localeCompare(b[columnIndex]),
        number: (a, b) => a[columnIndex] - b[columnIndex]
    };

    rows.sort(sorters[columnDataType])

    //Get the maximum width of each column
    const headers = keys.map((_, i) => String.fromCharCode(65 + i));

    const columnWidths = rows.reduce(
        (widths, row) =>
            row.map((cell, i) =>
                Math.max(widths[i], String(cell).length + 2)
            ),
        headers.map(h => h.length + 2)
    );

    //* Functions to draw the table
    function drawHorizontalLine() {
        let line = "+";
        columnWidths.forEach(width => {
            line += "-".repeat(width) + "+"
        })
        return line;
    }

    function drawRow(cells) {
        const columns = cells.map((cell, i) => {
            const text = String(cell);
            const totalWidth = columnWidths[i];
            const padding = totalWidth - text.length - 1;

            return " " + text + " ".repeat(padding);
        });

        return "|" + columns.join("|") + "|\n";
    }

    //* Start drawing the table
    let table = "";
    table += drawHorizontalLine() + "\n";

    //? Headers
    table += drawRow(headers)

    table += drawHorizontalLine() + "\n";

    //? Rows
    rows.forEach(row => {
        table += drawRow(row)
    })

    table += drawHorizontalLine();

    //* Return the table
    return table;
}

//* Tests
console.log(
    drawTable(
        [
            { name: 'Charlie', city: 'New York' },
            { name: 'Alice', city: 'London' },
            { name: 'Bob', city: 'Paris' }
        ],
        'name'
    )
)

console.log(
    drawTable(
        [
            { gift: 'Book', quantity: 5 },
            { gift: 'Music CD', quantity: 1 },
            { gift: 'Doll', quantity: 10 }
        ],
        'quantity'
    )
)