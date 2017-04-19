// https://leetcode.com/problems/paint-fence/#/solutions
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return k;
  }
  var same = k;
  var dif = k*(k-1);

  for (var i = 3; i < n+1; i++) {
    var _same = same;
    var _dif = dif;

    same = _dif;
    dif = (_same+_dif)*(k-1);
  }

  return same + dif;

};
