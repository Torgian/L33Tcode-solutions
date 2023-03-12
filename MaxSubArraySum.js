/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane's Algorithm
var maxSubArray = function (nums) {
    let maxSoFar = Number.MIN_SAFE_INTEGER
    let maxEndingHere = 0
    for (const number of nums) {
        maxEndingHere = maxEndingHere + number
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0
        }
    }

    return maxSoFar
};