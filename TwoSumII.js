/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Time limit exceeded
var twoSum = function (numbers, target) {
    if (numbers.length === 2) {
        return [1, 2]
    }

    let i = 0

    for (i; i < numbers.length; i++) {
        let right = i + 1
        while (right < numbers.length) {

            if (numbers[i] + numbers[right] === target) {
                return [i + 1, right + 1]
            } else {
                right += 1
            }
        }
    }
};

// Passes. 67ms, beating 73.4%. 43.2 MB beating 33%
/**
 * This is the approach.
 * 
 * We use binary search (two pointers) in this case.
 * If [left] + [right] > target, right should be reduced by 1
 * If [left] + [right] < target, left should be increased by 1
 * 
 * At some point, both the left and right pointer should be at its solution number. We simply increase or decrease the left or right pointers
 * based on the sum of both.
 * 
 * This took a little while to figure out, and I needed to read some discussions about this approach. My math sucks :-/
 * 
 * Provability:
 * 
 * First, Left and Right will never cross. So, if each is increasing or decreasing, eventually a solution will reach based on the following restrictions:
 *  1) The array is sorted by increasing values
 *  2) There IS a solution that equals the `target`
 *  
 * However, what do we do in an edge case scenario if there is NOT a solution? We would need to check if `left` is more than or equal to `right`. This will break the loop,
 * and we can return some other value (such as, "none found" or perhaps some other value needed according to design)
 * 
 */
var twoSum = function (numbers, target) {
    if (numbers.length === 2) {
        return [1, 2]
    }

    let left = 0
    let right = numbers.length - 1
    let result = null
    while (!result) {
        if (numbers[left] + numbers[right] === target) {
            result = [left + 1, right + 1]
        }
        if (numbers[left] + numbers[right] > target) {
            right -= 1
            // Removing the `else if` conditional will reduce runtime to 60ms, and space to 43MB 
        } else if (numbers[left] + numbers[right] < target) {
            left += 1
        }
    }
    return result
};

// Tests

twoSum([2, 7, 11, 15], 9)
twoSum([2, 3, 4], 6)
twoSum([-3, 3, 5, 11, 22], 0)