// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    // NOTE recursive, time limit exceed
    // if (n <= 1) {
    //     return 1;
    // }
    // return climbStairs(n-1) + climbStairs(n-2);


    // NOTE time O(n), space O(n), AC
    // var record = [];
    // record[0] = 1;
    // record[1] = 1;

    // for (var i = 2; i < n+1; i++) {
    //   record[i] = record[i-1] + record[i-2];
    // }

    // return record[n];


    // NOTE time O(n), space O(1)
    var prev = 0,
        cur = 1,
        tmp = 0,
        tmp2 = 0;

    for (var i = 1; i <= n; i++) {
        tmp = cur;
        tmp2 = prev + cur;
        // update cur and prev
        prev = tmp;
        cur = tmp2;
    }
    return cur;
};

console.log(climbStairs(38));
