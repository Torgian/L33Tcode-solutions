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

/**
 * Slightly refactored, makes it faster and lighter.
 * 96ms, 46.8MB (beats 64.28%, beats 52.94%)
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0
    let right = nums.length - 1
    if (nums.length === 1) {
        return nums
    }

    while (left <= right) {
        if (nums[right] !== 0) {
            right -= 1
        } else {
            nums.push(nums.splice(right, 1))
        }

        if (nums[left] !== 0) {
            left += 1
        } else {
            nums.push(nums.splice(left, 1))
        }
    }

    return nums
};

/**
 * One liners are actually slower and heavier!
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0
    let right = nums.length - 1
    if (nums.length === 1) {
        return nums
    }

    while (left <= right) {
        nums[right] !== 0 ? right -= 1 : nums.push(nums.splice(right, 1))

        nums[left] !== 0 ? left += 1 : nums.push(nums.splice(left, 1))
    }

    return nums
};

/**
 * Probably the fastest. 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let left = 0
    let i = 1
    while (i < nums.length) {
        if (nums[left] === 0 && nums[i] !== 0) {
            nums[left] = nums[i]
            nums[i] = 0
            left++
        }
        if (nums[left] !== 0) {
            left++
        }
        i++
    }
};


// Test cases

// moveZeroes([0,1,0,3,12])
// moveZeroes([0])
// moveZeroes([23,2,9,0,0,1,0,43,2,4,0])