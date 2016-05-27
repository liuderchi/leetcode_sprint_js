/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

    function breakInt(n, numParts){
        var result = [],
            remain = n,
            target;
        for (var i = 0; i < numParts; i++) {
            target = Math.floor(n/numParts);
            remain -= target;
            if (remain < target){
                target += remain;
                remain = 0;
            }
            result.push(target);
        }
        // NOTE dividing remain, add ones
        for (i = 0; remain > 0; i++) {
            result[i] += 1;
            remain--;
        }
        return result;
    }

    function productSum(array){
        var s = 1;
        array.forEach(function(n){
            s *= n;
        });
        return s;
    }

    var last = 1,
        current = 1;
    for (var i = 2; i <= n; i++) {
        current = productSum(breakInt(n, i));
        if (current < last) {
            return last;
        }
        last = current;
    }
    return current; // for n = 2
};
