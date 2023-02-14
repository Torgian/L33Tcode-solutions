/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a === '0' && b === '0') return '0'
    if (a === '1' && b === '1') return '10'
    // 1 is 1
    // 2 is 0, carry the 1
    // 3 is 1, carry the 1
    const binaryA = a.split('').reverse().map(n => parseInt(n))
    const binaryB = b.split('').reverse().map(n => parseInt(n))
    const lengthOfLoop = binaryA.length > binaryB.length ? binaryA.length : binaryB.length

    let carryOver = 0
    let sum = []

    for (let i = 0; i < lengthOfLoop; i++) {
        let numA = binaryA[i] || 0
        let numB = binaryB[i] || 0
        if (carryOver + numA + numB === 0) {
            sum.push(0)
            carryOver = 0
        } else if (carryOver + numA + numB === 1) {
            sum.push(1)
            carryOver = 0
        } else if (carryOver + numA + numB === 2) {
            sum.push(0)
            carryOver = 1
        } else if (carryOver + numA + numB === 3) {
            sum.push(1)
            carryOver = 1
        }
    }
    if (carryOver === 1) {
        sum.push(1)
    }

    return sum.reverse().join('')
};

addBinary('11', '1');
addBinary('11001001011', '1101001');
addBinary('0', '0');
addBinary('0', '1');
addBinary('0011', '11011001');