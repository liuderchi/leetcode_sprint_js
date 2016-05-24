/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var target = [],
        ref = [],
        result = [],
        bucket = {};

    // NOTE keep bucket to avoid double loop
    function mark(n) {
        if(!bucket[n]) bucket[n] = true;
    }

    if (nums1.length >= nums2.length){
        target = nums2;
        ref = nums1;
    } else {
        target = nums1;
        ref = nums2;
    }

    ref.forEach(mark);
    target.forEach(function(num){
        if (bucket[num]){
            if (result.indexOf(num) < 0) result.push(num);
            // NOTE push only when unique
        }
    });

    return result;
};
