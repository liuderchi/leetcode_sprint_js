/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

    function breakInt(n, numParts){
        var result = [];
        for (var x = 0 ; x < numParts; x++) {
          result.push(0);
        }
        for (var i = 0 ; i < n ; i ++){
          result[i%numParts] += 1;
        }
        return result;
    }

    function productSum(array){
        return array.reduce(function(cur, next){
          return cur*next;
        }, 1);
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
