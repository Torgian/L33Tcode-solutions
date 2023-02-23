// JavaScript source code
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    const numbers = [...new Array(high + 1 - low).keys()].map(x => x + low)
    const filteredOdd = numbers.filter(n => n % 2 === 1)
    return filteredOdd.length
};

countOdds(3, 7)
countOdds(2342234, 5882432234)