// 035 Search Insert Position
// https://leetcode.com/problems/search-insert-position/#/description
// https://leetcode.com/problems/search-insert-position/#/solutions

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertPosition = function(nums, target) {
  var cur;

  for (var index in nums) {
    if (nums[index] > target) {
      if (index > 0 && target > nums[index - 1]) {
        return parseInt(index);
      } else if (index === '0') {
        return 0;
      }
    } else if (nums[index] === target) {
      return parseInt(index);
    }
  }
  return nums.length;
};

exports.default = searchInsertPosition;
