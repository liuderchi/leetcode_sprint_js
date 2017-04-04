/**
 * @param {number[]} nums
 * @return {number}
 */
var robRecursive = function(nums) {
    var recursive = function(_nums) {
        if (_nums.length === 0) return 0;
        if (_nums.length === 1) return _nums[0];
        if (_nums.length === 2) return Math.max(_nums[0], _nums[1]);

        return Math.max( _nums[0] + recursive(_nums.slice(2)), recursive(_nums.slice(1))  ) ;
    }
    return recursive(nums);
}

var rob = function(nums) {
    // dp[i] = max(dp[i-1], dp[i-2]+nums[i-1])
    var dp = [];
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    dp.push(0);
    dp.push(nums[0]);

    for (var i=2; i<=nums.length; i++) {
      // i: i th house
      dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i-1]);
    }
    return dp[dp.length-1];
};


console.log(rob([0]));   //         0
console.log(rob([2,4]));   //       4
console.log(rob([100, 200, 3])); // 200
