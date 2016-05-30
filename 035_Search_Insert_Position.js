/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var cur;

    for (var index in nums){
        if (nums[index] > target) {
            if (index > 0 && target > nums[index-1] ) {
                return parseInt(index);
            } else if (index === '0') {
                return 0;
            }
        } else if (nums[index] == target){
            return parseInt(index);
        }
    }
    return nums.length;
};

console.log(searchInsert([1,3,5,6], 5));   // 2
console.log(searchInsert([1,3,5,6], 2));   // 1
console.log(searchInsert([1,3,5,6], 7));   // 4
console.log(searchInsert([1,3,5,6], 0));   // 0
