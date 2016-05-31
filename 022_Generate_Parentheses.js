/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ret = [];

    function genParenRecu(result, current, leftRemain, rightRemain){
        if (leftRemain === 0 && rightRemain === 0){
            result.push(current);
        }
        if (leftRemain > 0) {
            genParenRecu(result, current+"(", leftRemain-1, rightRemain);
        }
        if (leftRemain < rightRemain){
            // NOTE currently left bracket is more, so can add right bracket
            genParenRecu(result, current+")", leftRemain, rightRemain-1);
        }
    }

    genParenRecu(ret, "", n, n);
    return ret;
};

// NOTE use recursive fcn call to 'walk through' all possible situation
