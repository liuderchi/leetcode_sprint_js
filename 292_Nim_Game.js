/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return Boolean(n % 4);  // return (n % 4) !== 0;
    // NOTE any player can consumpt 4 stone each round for sure
    // so game result is determined by last 0~4 stones


    // NOTE 4: bound to lose
    // 5: bound to win by removing 1
    // 6: bound to win by removing 2
    // 7: bound to win by removing 3
    // 8: bound to lose
};
