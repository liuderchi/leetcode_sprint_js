/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num >= 10){
        str = num.toString();
        var sum = 0;
        for (var i=0; i<str.length; i++){
            sum += parseInt(str[i]);
        }
        return addDigits(sum);
    } else {
        return num;
    }
};
