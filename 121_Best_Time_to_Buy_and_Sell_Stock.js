/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;

    var max = 0,
        id_max = 0,
        min = prices[0];

    for (var index in prices) {
        if (prices[index] > max) {
            max = prices[index];
            id_max = index;
        }
    }

    if (id_max === '0') {
        prices.splice(0,1);
        return maxProfit(prices);
    }

    for (var i = 1; i < id_max; i++) {
        min = Math.min(prices[i], min);
    }

    return max-min;
};

var maxProfitTwo = function(prices) {
    var res = 0;
    for(var i=0; i<prices.length; i++){
        for(var j =i+1; j<prices.length; j++) {
            var diff = (prices[j]-prices[i]);
            res = (diff>res)? diff : res;
        }
    }
    return res;
};

var maxProfitKadane = function(prices) {
  var maxCur = 0;
  var maxSoFar = 0;
  for (var i = 1; i < prices.length; i++) {
    maxCur += prices[i] - prices[i-1];  // daily accu
    maxCur = Math.max(0, maxCur);       // reset accu if it's negative
    maxSoFar = Math.max(maxCur, maxSoFar);   // record largest accu (consequtive accu)
  }
  return maxSoFar;
};

var maxProfitFindMin = function(prices) {
  if (prices.length <= 1) return 0;
  var curMin = prices[0];
  var res = 0;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] > curMin) {
      res = Math.max(res, prices[i] - curMin);
    } else {
      curMin = prices[i];
    }
  }

  return res;
};

console.log(maxProfitFindMin([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfitFindMin([4, 3, 2, 1])); // 5
console.log(maxProfitKadane([1,2,3,2,1,0,2,4,6])); // 6
