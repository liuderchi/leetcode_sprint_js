/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var bucket = {};
    nums.forEach(function(num){
        bucket[num] = true;
    });
    for (i =0; i <= nums.length; i++) {
        if (bucket[i] !== true){
            return i;
        }
    }
};
