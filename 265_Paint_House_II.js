/*
There are a row of n houses, each house can be painted with one of the k colors.
The cost of painting each house with a certain color is different.
You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x k cost matrix.
For example, costs[0][0] is the cost of painting house 0 with color 0;
costs[1][2] is the cost of painting house 1 with color 2, and so on...
Find the minimum cost to paint all houses.
*/


/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {

  var n = costs.length;
  if ( n === 0 ) return 0;

  var k = costs[0].length;

  // init dp
  // let dp means current cost of some coloring
  var dp = []
  for (var i=0; i<n; i++) {
    var tmp = []
    for (var j=0; j<k; j++) tmp.push(0);
    dp.push(tmp);
  }

  for (j=0; j<k; j++) dp[0][j] = costs[0][j];
  for (i=1; i<n; i++) {
    for (j=0; j<k; j++) {
      dp[i][j] = costs[i][j] + findMin(dp[i-1], j);
    }
  }

  function findMin(array, skipInd) {
    if (array.length === 0) return null;
    if (skipInd >= array.length) return null;

    var min = (skipInd !== 0) ? array[0]:array[1];

    for(var i=1; i<array.length; i++){
      if (i===skipInd) continue;
      min = Math.min(min, array[i]);
    }
    return min;
  }

  return findMin(dp[n-1]);
};

// NOTE can you solve it in O(nk) time?
console.log(
  minCostII([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ])
);
