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


console.log(checkSubarraySum([1,2,3], 6));   // true
console.log(checkSubarraySum([0], 0));       // false
console.log(checkSubarraySum([0, 0], 0));    // true
