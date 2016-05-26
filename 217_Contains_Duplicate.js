/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var bucket = {};

    for (var i = 0; i < nums.length; i++) {
        if (bucket[nums[i]]) {
            return true;
        } else {
            bucket[nums[i]] = true;
        }
    }
    return false;
};
