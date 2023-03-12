/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Super slow, but works
var containsDuplicate = function (nums) {
    const mappedNumbers = new Map()
    for (const num of nums) {
        console.log(num)
        if (mappedNumbers.get(num)) {
            return true
        } else {
            mappedNumbers.set(num, 1)
        }
    }

    return false
};

// SUPER SLOW
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*var containsDuplicate = function (nums) {
    const sortedNumbers = nums.sort().reduce((acc, num, ind) => {
        if (ind > 0) {
            if (acc[ind - 1] !== num) {
                return acc = [...acc, num]
            } else {
                return acc
            }
        } else {
            return acc = [num]
        }
    }, [])
    return sortedNumbers.length !== nums.length
};*/

//Slightly faster
var containsDuplicate = function (nums) {
    let sortedNums = nums.sort()
    let temp = nums[0]
    for (var i = 1; i < sortedNums.length; i++) {
        if (sortedNums[i] === temp) {
            return true
        }
        temp = sortedNums[i]
    }
    return false
};