/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {

    // if n=2 +1-1+2-2 ,pick 3 , alternatively

    // function genSequence(n) {
        // var ret = [];
        // for (var i = 0; i < n; i++) {
            // ret.push(-Math.pow(2, i));
            // ret.splice(0, 0, Math.pow(2, i));
        // }
        // return ret;
    // }

    var ret = []
    for (var i = 0; i < Math.pow(2, n); i++) {
        ret[i] = i >> 1^i;
    }
    return ret;

    //return [i >> 1 ^ i for i in xrange(1 << n)]
};

console.log(grayCode(2));
console.log(grayCode(3));
console.log(grayCode(4));
