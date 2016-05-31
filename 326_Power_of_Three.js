/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;

    while ((n % 3 === 0) && n > 3) {
        n = Math.floor(n / 3);
        if (n % 3 !== 0) return false;
    }

    return (n === 1) || (n === 3);

};
