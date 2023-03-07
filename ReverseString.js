/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // The obvious "at work" solution
    // return s.reverse()

    // 76ms beats 98%, 54.55% beat for memory, 49.1mb
    let left = 0
    let right = s.length - 1
    let character = ''

    while (left < right) {
            character = s[right]
            s[right] = s[left]
            s[left] = character

            left += 1
            right -= 1
    }
};


