/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var chrIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var ret = 0;
    var chrs = s.split('');

    //NOTE ADD from left to right, except for current char is greater than previous

    chrs.forEach(function(c, index){
        if ((index > 0) && (chrIntMap[c] > chrIntMap[chrs[index-1]])) {
            // e.g. XIV
            ret -= chrIntMap[chrs[index-1]]; // revert last op
            ret += (chrIntMap[c] - chrIntMap[chrs[index-1]]);
        } else {
            ret += chrIntMap[c];
        }
    });
    return ret;
};
