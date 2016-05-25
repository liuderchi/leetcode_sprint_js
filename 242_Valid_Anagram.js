/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    var list_s = s.split(''),
        list_t = t.split('');
    list_s.sort();
    list_t.sort();

    for (var i = 0; i < list_s.length; i++) {
        if (list_s[i] !== list_t[i]) return false;
    }
    return true;
};
