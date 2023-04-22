// Return length of longest substring. Use the sliding window algorithm
/**
 * @param {string} s
 * @return {number}
 * Sliding window is a method to search for the substring in the array.
 * 
 * 
 */
vvar lengthOfLongestSubstring = function(s) {
    let set = new Set()
    // Left is the starting point for the search
    let left = 0
    
    let maxSize = 0

    if (s.length === 0 || s.length === 1) return s.length
    
    // Example: [a,b,c,a,b,b]
    for (let i = 0; i<s.length; i++) {
        // s[i] is the string
        // In the first three iterations, `a,b,c` are added to the set.

        // maxSize is incrementing by one each loop for indexes 0 - 2, then...
        // the set already has the letter 'a' of array index 3, so...
        while (set.has(s[i])) {
            // ...delete the letter 'a', and increase left by one
            set.delete(s[left])
            // Increment left by one.
            left++
        }

        // Add the string in index 3 to the set, so now the set is `b,c,a`
        set.add(s[i])
        // Calculate the maxsize. Now, `maxSize` is currently `3`. `left` is `1`,  `i` is `3`. `i - left + 1` is 2. So maxSize is still `3`
        maxSize = Math.max(maxSize, i - left+1)
    }

    // On the forth and fifth iterations, we have the letter `b`. 
    // `left` will increase by `3`, since `b` is in the set twice. equaling left===4. On the final iteration, `maxSize` is 3, i==5, left ==4, so i-left+1 is 2. Therefore, 3 is still the max size. 