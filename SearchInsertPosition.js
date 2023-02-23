// JavaScript source code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length === 1) {
        if (nums[0] === target || nums[0] > target) return 0
        if (nums[0] < target) return 1
    }

    if (nums[nums.length - 1] < target) {
        return nums.length
    }

    if (nums[0] >= target) {
        return 0
    }

    let left = 1
    let right = nums.length
    let middle = 0
    let numberIndex = 0
    while (left < right) {
        middle = Math.floor(left + (right - left) / 2);

        if (nums[numberIndex] === target) return numberIndex

        if (target < nums[middle]) {
            right = middle
            numberIndex = middle - 1
            if (nums[numberIndex] < target) return middle
        } else {
            left = middle + 1
            numberIndex = middle
            if (nums[numberIndex] > target) return numberIndex
        }
    }
    return middle

    return numberIndex
};