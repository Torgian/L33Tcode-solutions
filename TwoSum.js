/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numbers = nums
    if (numbers[0] + numbers[1] === target) {
        return [0, 1]
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
};

twoSum([2, 7, 11, 15], 9)