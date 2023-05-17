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