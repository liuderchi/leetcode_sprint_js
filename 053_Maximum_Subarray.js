// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {


    function allNegative(array){
        var ret = array.filter(function(n){return n>=0;});
        return ret.length === 0;
    }

    if (allNegative(nums)) {
        var max = nums[0];
        for (i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
        }
        return max;
    }


    var global_max = -10000000,
        local_max = 0;

    for (var i in nums) {
        local_max = Math.max(0, local_max + nums[i]);
        global_max = Math.max(global_max, local_max);
    }

    return global_max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2,-1]));
console.log(maxSubArray([-2,1]));
console.log(maxSubArray([-2]));
console.log(maxSubArray([1]));

// minIndex +1 : maxIndex

// if (nums.length === 1) {
//     return nums[0];
// }
//
// var sums = [];
//
// sums[0] = nums[0];
// for (var i = 1; i < nums.length; i++) {
//     sums[i] = nums[i] + sums[i-1];
// }
//
// if (nums[0] > 0)  sums.splice(0,0,0);
//
// var min = nums[0],
//     minIndex = 0,
//     max = nums[0],
//     maxIndex = 0;
//
// for (i = 0; i < sums.length; i++) {
//     max = (sums[i] > max) ? sums[i] : max;
//     min = (sums[i] < min) ? sums[i] : min;
// }
//
// if (max <= 0) {return max;}
// return max-min;
