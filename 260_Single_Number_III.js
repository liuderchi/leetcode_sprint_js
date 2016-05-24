/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort();

    var result = [];

    while (nums.length) {
        if (nums[0] === nums[1]){
            nums.splice(0,1);
            nums.splice(0,1);
        } else {
            result.push(nums[0]);
            nums.splice(0,1);
        }
    }
    return result;
};
