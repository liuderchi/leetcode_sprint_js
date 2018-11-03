/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const chrIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ret = 0;
  const chrs = s.split('');

  //NOTE ADD from left to right, except for current char is greater than previous

  chrs.forEach((c, index) => {
    if (index > 0 && chrIntMap[c] > chrIntMap[chrs[index - 1]]) {
      // e.g. XIV
      ret -= chrIntMap[chrs[index - 1]]; // revert last op
      ret += chrIntMap[c] - chrIntMap[chrs[index - 1]];
    } else {
      ret += chrIntMap[c];
    }
  });
  return ret;
};

exports.default = romanToInt;
