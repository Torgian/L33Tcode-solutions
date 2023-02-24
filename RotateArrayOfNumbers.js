/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length === 2) {
        return k % 2 === 0 ? nums : nums.reverse()
    }
    // This works well, but the edge case is bad, if k is higher than the lenght of the nums array
    return nums.unshift(...nums.splice(nums.length - k, k))
};

var rotate = function (nums, k) {
    // Use modulo to find out how many steps we actually need
    const steps = k % nums.length

    return nums.unshift(...nums.splice(nums.length - steps, steps))
}