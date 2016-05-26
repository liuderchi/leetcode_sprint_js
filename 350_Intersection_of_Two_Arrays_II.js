/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var result = [],
        bucket = {};

    function count(n) {
        if(!bucket[n]) {
            bucket[n] = 1;
        } else {
            bucket[n] += 1;
        }
    }

    // NOTE comparing nums1.length, nums2.length is redundent

    nums1.forEach(count);
    nums2.forEach(function(num){
        if (bucket[num]){
            result.push(num);
            bucket[num] -= 1;
        }
    });

    return result;
};
