/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1){
        return nums[0];
    }
    nums.sort();
    for (var i=0; i<nums.length-1; i+=2){
        if (nums[i] !== nums[i+1]){
            return nums[i];
        }
    }
    return nums[nums.length-1];    // NOTE last element is single
};


var singleNumber_linearTime = function(nums) {
    if (nums.length === 1){
        return nums[0];
    }
    var bucket = {};

    for (var i = 0; i < nums.length; i++) {
        if (bucket[nums[i]]){
            delete bucket[nums[i]];
        } else {
            bucket[nums[i]] = true;
        }
    }
    return parseInt(Object.keys(bucket)[0]);
};


var singleNumber_linearTimeNoExtraRAM = function(nums) {
    return nums.reduce(function(acc, num){
        return acc^num; // XOR
    });
};
