// 070 Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/#/description
// https://leetcode.com/problems/climbing-stairs/#/solutions

/**
 * @param {number} n
 * @return {number}
 */
var climbingStairs = function(n) {
  // NOTE time O(n), space O(1)
  var prev = 0,
    cur = 1,
    tmp = 0;

  for (var i = 1; i <= n; i++) {
    // update prev the cur
    tmp = prev + cur;
    prev = cur;
    cur = tmp;
  }
  return cur;
};

exports.default = climbingStairs;
