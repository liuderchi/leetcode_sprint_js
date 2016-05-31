/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0 ) return false;
    if (num === 1) return true;

    var specialPrimes = [2, 3, 5];

    function extract(n, prime) {
        while (n % prime === 0) {
            n = n / prime;
        }
        return n;
    }

    for (var i = 0; i < specialPrimes.length; i++) {
        num = extract(num, specialPrimes[i]);
    }

    return num === 1;
};

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));
