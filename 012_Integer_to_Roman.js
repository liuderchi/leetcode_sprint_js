/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var intChrMap = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    var components = Object.keys(intChrMap)
                           .sort(function(a,b){return b-a;})
                           .map(function(c){return parseInt(c);});
    // integer components begins with larger ones

    var ret = [];
    for (var comp in components) {
        while (num >= components[comp]) {
            ret.push(intChrMap[components[comp]]);
            num -= components[comp];
        }
    }
    return ret.join('');

};

console.log(intToRoman(55));
