/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * This is kind of slow and heavy. 127ms, 47.5MB
 */
var moveZeroes = function (nums) {
    let left = 0
    let right = nums.length - 1
    if (nums.length === 1) {
        return nums
    }
    while (left <= right) {
        if (nums[left] === 0) {
            nums.push(nums.splice(left, 1))
            right -= 1
        } else {
            left += 1
        }
        if (nums[right] === 0 && right !== nums.length - 1) {
            nums.push(nums.splice(right, 1))
        } else {
            right -= 1
        }
    }

    return nums
};

