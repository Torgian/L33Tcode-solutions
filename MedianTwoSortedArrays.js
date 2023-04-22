/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // After some time, I had decided it best to sort the numbers in a single array, rather than use the two separate arrays in my logic
    let sortedNumbers = [...nums1, ...nums2].sort((a, b) => a - b)

    if (sortedNumbers.length % 2 === 0) {
        // Tip for improvement? I can probably make this better by using `Math.floor` instead of "-1"
        const numOne = sortedNumbers[(sortedNumbers.length / 2) - 1]
        const numTwo = sortedNumbers[sortedNumbers.length / 2]

        const median = (numOne + numTwo) / 2
        return median
    } else {
        const middleIndex = (sortedNumbers.length - 1) / 2
        return sortedNumbers[middleIndex]
    }
};

findMedianSortedArrays([3], [-2, -1])
findMedianSortedArrays([], [2,3])