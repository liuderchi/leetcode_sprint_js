// 022 Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/#/description
// https://leetcode.com/problems/generate-parentheses/#/solutions

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParentheses = function(n) {
  var ret = [];

  const genParenRecu = (result, current, leftRemain, rightRemain) => {
    if (leftRemain === 0 && rightRemain === 0) {
      result.push(current);
    }
    if (leftRemain > 0) {
      genParenRecu(result, `${current}(`, leftRemain - 1, rightRemain);
    }
    if (leftRemain < rightRemain) {
      // NOTE currently left bracket is more, so can add right bracket
      genParenRecu(result, `${current})`, leftRemain, rightRemain - 1);
    }
  };

  genParenRecu(ret, '', n, n);
  return ret;
};

exports.default = generateParentheses;
