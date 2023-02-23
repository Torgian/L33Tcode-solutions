// First solution for fun, VERY slow and VERY bad
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const sortedSquares = []

    // Make two pointers
    let left = 0
    let right = nums.length - 1

    let currentIndex = 0

    const sortedArray = nums.reduce((acc, currentValue) => {
        const squaredNum = currentValue * currentValue
        const indexOfHigherNum = acc.findIndex(n => n > squaredNum)

        if (indexOfHigherNum >= 0) {
            acc.splice(indexOfHigherNum, 0, squaredNum)
        } else {
            acc.push(squaredNum)
        }
        return [...acc]
    }, [])


    return sortedArray
};

// Second solution, how I normally would do it, 109ms 48.4MB 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    const sortedArrayAscending = nums.map(n => n * n).sort((a, b) => a - b)

    return sortedArrayAscending
};

// Two pointer approach?

var sortedSquares = function (nums) {
    let n = nums.length
    let left, right = 0, n - 1

    let k = n - 1
    let answer = [0] * n

    while (k >= 0) {
        if ()
	}
}