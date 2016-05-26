/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var target = [],
        ref = [],
        result = [],
        bucket = {};

    function count(n) {
        if(!bucket[n]) {
            bucket[n] = 1;
        } else {
            bucket[n] += 1;
        }
    }

    if (nums1.length >= nums2.length){
        target = nums2;
        ref = nums1;
    } else {
        target = nums1;
        ref = nums2;
    }

    ref.forEach(count);
    target.forEach(function(num){
        if (bucket[num]){
            result.push(num);
            bucket[num] -= 1;
        }
    });

    return result;
};
