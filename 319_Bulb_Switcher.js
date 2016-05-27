/**
 * There are n bulbs that are initially off. You first turn on all the bulbs.
 * Then, you turn off every second bulb.
 * On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on).
 * For the ith round, you toggle every i bulb.
 * For the nth round, you only toggle the last bulb.
 * Find how many bulbs are on after n rounds.
 *
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {

    return Math.floor(Math.sqrt(n));

    // only suared number has odd number of factors
    // NOTE explaination https://leetcode.com/discuss/91371/share-my-o-1-solution-with-explanation
};

console.log(bulbSwitch(3));
// NOTE find index with odd number of factors: this method save resource
