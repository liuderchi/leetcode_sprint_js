/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0,
        count = 0,
        char = '';

    s = s.split('');
    while (s.length > 0){
        char = s.pop();
        result += (char.charCodeAt(0)-64)*Math.pow(26, count);
        count ++;
    }
    return result;
};

console.log(titleToNumber('BBBCCD'));
console.log(titleToNumber('Z'));
