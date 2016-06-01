// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.
//
// Example: 19 is a happy number
//
//     1^2 + 9^2 = 82
//     8^2 + 2^2 = 68
//     6^2 + 8^2 = 100
//     1^2 + 0^2 + 0^2 = 1
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    function sumOfSquare(num) {
        var intArray = num.toString().split('').map(function(c){return parseInt(c);});
        var ret = 0;
        for (var i in intArray) {
            ret += Math.pow(intArray[i], 2);
        }
        return ret;
    }

    var bkt = {};

    while (true) {
        n = sumOfSquare(n);
        if (n === 1) return true;
        if (bkt[n] === undefined) {
            bkt[n] = true;
        } else {
            return false;
        }
    }
};

console.log(isHappy(2));
console.log(isHappy(19));
