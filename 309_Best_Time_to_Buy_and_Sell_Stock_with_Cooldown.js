// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
//
//     You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
//     After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
//
// Example:
//
// prices = [1, 2, 3, 0, 2]
// maxProfit = 3
// transactions = [buy, sell, cooldown, buy, sell]


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    if (prices.length === 0) return 0;

    // var diffs = [0];
    // for (var i = 1; i < prices.length; i++) {
        // diffs.push(prices[i]-prices[i-1]);
    // }
    // console.log(diffs);
    // if also positive near me
    // return Math.max(recur(n), recur(n+1));

    var buy = [0, 0],
        sell = [0, 0],
        coolDown = [0, 0];

    buy[0] = -prices[0];

    for (var i = 1; i < prices.length; i++) {
        // Bought before or buy today.
        buy[i % 2] = Math.max(buy[(i - 1) % 2], coolDown[(i - 1) % 2] - prices[i]);
        // Sell today.
        sell[i % 2] = buy[(i - 1) % 2] + prices[i];
        // Sold before yesterday or sold yesterday.
        coolDown[i % 2] = Math.max(coolDown[(i - 1) % 2], sell[(i - 1) % 2]);
    }

    return Math.max(coolDown[(prices.length - 1) % 2], sell[(prices.length - 1) % 2]);
};

console.log(maxProfit([1,2,3,0,2]));
