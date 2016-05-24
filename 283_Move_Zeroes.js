/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0,
        index = 0;

    while(count < nums.length) {
        if(nums[index] === 0) {
            nums.splice(index, 1);
            nums.push(0);
        } else {
            index++;
        }
        count++;
    }
    return;

    //TODO don't use forEach, index iteration would skip element
    nums.forEach(function(num){
        if (num === 0) {
            nums.splice(nums.indexOf(num), 1);
            nums.push(0);
        }
    });
};
