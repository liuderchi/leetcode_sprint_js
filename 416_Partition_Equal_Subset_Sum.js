// https://leetcode.com/problems/partition-equal-subset-sum/#/solutions


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // find a subset whether equals to Math.sum(nums) / 2
    // sum should be even

    var sum = nums.reduce(function(c,n){return c+n;}, 0);
    if (sum % 2 !== 0) return false;

    var target = sum / 2;

    // NOTE dp design
    // dp[i][j]: whether sum j can be gotten from first i numbers
    // base case
    //   dp[0][0] = true;
    // dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
    //   case one: don't pick i th
    //   case two: pick i th, so first i-1 is composed of subsum (j - nums[i-1])

    // init dp
    var n = nums.length;
    var dp = [];
    for (var i=0; i<n+1; i++) {
        var tmp = [];
        for (var j=0; j<target+1; j++) {
            tmp.push(false);
        }
        dp.push(tmp);
    }
    dp[0][0] = true;
    // first row
    for (j=1; j<target+1; j++) {
        dp[0][j] = false;
    }
    for (i=1; i<n+1; i++) {
        dp[i][0] = true;
    }

    // calculate
    for (i=1; i<n+1; i++) {
        for (j=1; j<target+1; j++) {
            dp[i][j] = dp[i-1][j-nums[i-1]] || dp[i-1][j];  // js handles undefined
        }
    }

    return dp[n][target];
};
