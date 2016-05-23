/**
 * @param {string} s
 * @return {string}
 * NOTE js string is immutable, use split() and join() to replace element
 */
var reverseString = function(s) {
    var r = s.split(''),
        tmp;
    for(var i = 0; i < Math.floor(r.length / 2); i++){
        tmp = r[i];
        r[i] = r[r.length - 1 - i];
        r[r.length - 1 - i] = tmp;
    }
    return r.join('');
};
