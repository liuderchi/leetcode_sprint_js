/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var count = {};

    nums.forEach(function(n){
        if (count[n] === undefined){
            count[n] = 1;
        } else {
            count[n] += 1;
        }
    });

    for (var c in count){
        if (count[c] !== 3){
            return parseInt(c);
        }
    }
};
