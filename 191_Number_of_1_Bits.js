/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var array = n.toString(2).split('');
    // NOTE binary str =>  split
    var ret = 0;

    for (var i = 0; i < array.length; i++){
        if (array[i] === '1') ret++;
    }

    return ret;
};
