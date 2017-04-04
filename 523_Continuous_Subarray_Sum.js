// https://leetcode.com/problems/continuous-subarray-sum/#/description
// http://bookshadow.com/weblog/2017/02/26/leetcode-continuous-subarray-sum/


var checkSubarraySum = function(nums, k) {
    // dp
    // let dp[i][j] is sum from i to j

    // dp[i][j] = dp[i][x] + dp[x][j]

    var n = nums.length;
    if (n < 2) return false;

    var tmp = [];
    for (var i = 0; i<n; i++) {
        tmp.push(nums[i]);

        for (var j = i+1; j<n; j++) {

            tmp.push(tmp[tmp.length-1] + nums[j]);
            if((tmp[tmp.length-1] % k === 0) && k!==0) return true;
            if((tmp[tmp.length-1] === 0) && k===0) return true;
        }
        tmp = [];
    }
    return false;
};

var _checkSubarraySum = function(nums, k) {
    var bucket = {0: -1};  // modulus, index
    var curSum = 0;

    if (nums.length <2) return false;

    for (var i=0; i<nums.length; i++) {
        // accu sum
        curSum += nums[i];

        var mod;
        if (k!==0) {
            mod = curSum % k;
        } else {
            mod = curSum;
        }

        // retrive index from bucket
        var retrieveInd = bucket[mod];
        if(retrieveInd !== undefined) {
            // retrivedInd is less than current index
            if (retrieveInd < i-1 ) return true;
        } else {
            bucket[mod] = i;
        }
    }

    return false;
};


console.log(checkSubarraySum([1,2,3], 6));   // true
console.log(checkSubarraySum([0], 0));       // false
console.log(checkSubarraySum([0, 0], 0));    // true

console.log(_checkSubarraySum([1,2,3], 6));   // true
