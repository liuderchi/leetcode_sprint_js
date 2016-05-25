/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var positiveDiffs = [],
        result = 0;

    for (var i = 1; i < prices.length; i++) {
        if ((prices[i]-prices[i-1]) > 0) {
            positiveDiffs.push(prices[i]-prices[i-1]);
        }
    }

    positiveDiffs.forEach(function(p){
        result += p;
    });

    return result;
};
