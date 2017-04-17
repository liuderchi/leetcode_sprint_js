/*
There are a row of n houses, each house can be painted with one of the three colors: red, blue or green.
The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x 3 cost matrix.
For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.
*/


/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {

    // dp[i][0]: cost of painting number i to red
    // dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + costs[i][0]
    // dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + costs[i][1]
    // dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + costs[i][2]

    var n = costs.length;
    if (n === 0) return 0;

    var dp = [];
    var dpHistory = [];
    for(var i=0; i<n; i++) {
        dp.push([0,0,0]);
        dpHistory.push([-1,-1,-1]);
    }
    dp[0][0] = costs[0][0];
    dp[0][1] = costs[0][1];
    dp[0][2] = costs[0][2];

    for (i=1; i<n; i++) {
        dp[i][0] = costs[i][0] + Math.min(dp[i-1][1], dp[i-1][2]);
        dp[i][1] = costs[i][1] + Math.min(dp[i-1][0], dp[i-1][2]);
        dp[i][2] = costs[i][2] + Math.min(dp[i-1][0], dp[i-1][1]);

        dpHistory[i][0] = (dp[i-1][1] < dp[i-1][2])? 1:2;
        dpHistory[i][1] = (dp[i-1][0] < dp[i-1][2])? 0:2;
        dpHistory[i][2] = (dp[i-1][0] < dp[i-1][1])? 0:1;
    }

    var paintHistory = [];
    var color = dp[n-1].indexOf(Math.min(dp[n-1][0], dp[n-1][1], dp[n-1][2]));
    for (i=n-1; i>-1; i--) {
        paintHistory.splice(0, 0, color);
        color = dpHistory[i][color];
    }
    var colorArray = ['red', 'blue', 'green'];
    console.log(paintHistory.map((c)=> {return colorArray[c];}));
    return Math.min(dp[n-1][0], dp[n-1][1], dp[n-1][2]);
};


console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]));  //[ 'blue', 'green', 'blue' ] 10
