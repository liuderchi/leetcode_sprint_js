/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [];
    for (var i = 0; i <= num; i++) {
        var base2 = (i).toString(2);
        var sum = 0;
        for (var j=0; j < base2.length; j++){
            if ((base2[j]) === '1'){
                sum += 1;
            }
        }
        result.push(sum);
    }
    return result;
};
