/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// First draft!
var convert = function (s, numRows) {
    if (numRows === 1) return s
    const rowsArray = []
    for (let i = 0; i < numRows; i++) {
        rowsArray[i] = []
    }

    let pointer = 0
    let increase = true

    const mappedString = s.split('').reduce((acc, character) => {
        if (pointer === 0) {
            increase = true
        }

        if (pointer === numRows - 1) {
            increase = false
        }

        acc[pointer].push(character)

        pointer = increase ? pointer + 1 : pointer - 1
        return acc

    }, rowsArray)

    const fullString = mappedString.flat().join('')
    return fullString
};

// Second draft
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s

    const rowsArray = new Array(numRows)

    let pointer = 0
    let increase = true

    for (let i = 0; i < s.length; i++) {
        if (i < numRows) {
            rowsArray[pointer] = []
        }
        rowsArray[pointer].push(s.charAt(i))

        pointer = increase ? pointer + 1 : pointer - 1

        if (pointer === 0) {
            increase = true
        }
        if (pointer === numRows - 1) {
            increase = false
        }
    }
    return rowsArray.flat().join('')
};

// Thrid draft using reduce
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s
    let increase = true
    let pointer = 0
    const mappedString = s.split('').reduce((acc, character, index) => {
        if (index < numRows) {
            acc[pointer] = []
        }
        acc[pointer].push(character)

        pointer = increase ? pointer + 1 : pointer - 1

        if (pointer === 0) {
            increase = true
        }

        if (pointer === numRows - 1) {
            increase = false
        }

        return acc

    }, [])

    return mappedString.flat().join('')
};