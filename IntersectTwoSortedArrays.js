/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let left = 0
    let right = 0
    let nums1Length = m
    while (nums1Length < m + n) {
        if (nums1[left] === 0) {
            nums1.splice(left, 0, nums2[right])
            right += 1
            nums1Length += 1
            nums1.pop()
        }

        if (nums1[left] >= nums2[right]) {
            nums1.splice(left, 0, nums2[right])
            nums1.pop()
            right += 1
            nums1Length += 1
        }
        left += 1
    }
    // Kinda cheating
    return nums1.sort((a, b) => a - b)
};