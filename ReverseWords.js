/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const arrayOfWords = s.split(' ')
    for (let i = 0; i < arrayOfWords.length; i++) {
        let character = ''
        let left = 0
        let right = arrayOfWords[i].length - 1

        word = arrayOfWords[i].split('')
        while (left < right) {
            character = word[right]
            word[right] = word[left]
            word[left] = character
            left += 1
            right -= 1
        }
        word = word.join('')
        arrayOfWords[i] = word
    }

    return arrayOfWords.join(' ')

};

reverseWords("Let's take LeetCode contest")
reverseWords("God Ding")

// Anotehr solution using built in functions, 

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').map(word => {
        return word.split('').reverse().join('')
    }).join(' ')
};