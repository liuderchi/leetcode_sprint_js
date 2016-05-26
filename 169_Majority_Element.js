/**
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element
 * always exist in the array.
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    var bucket = {},
        num = 0;
        threshold = Math.floor(nums.length / 2);

    while (nums.length > 0) {
        num = nums.pop();

        if (bucket[num]){
            bucket[num] += 1;
        } else {
            bucket[num] = 1;
        }

        if (bucket[num] > threshold) {
            return num;
        }
    }
};
