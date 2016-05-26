/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0,
        char = '';

    s = s.split('');
    for (var count = 0; s.length > 0; count++) {
        char = s.pop();
        result += (char.charCodeAt(0)-64)*Math.pow(26, count);
    }
    return result;
};
