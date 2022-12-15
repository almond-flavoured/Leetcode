/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const toArray = String(x).split('')
    let result = []
    for (let i = 0; i < toArray.length; i++) {
        result.unshift(toArray[i])
    }
    result = +result.join('')
    if (result === x) {
        return true
    }
    return false
};