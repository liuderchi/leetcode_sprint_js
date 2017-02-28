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

// NOTE
// It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
// Space complexity should be O(n).

// I. consider if carry
var countBits = function(num) {
  var ret = [0];
  for (var i = 1; i < num + 1; i++) {      // linear time
    var bitUnChangedIndex = i & (i -1);    // reuse bits not affected by carry
    ret.push(ret[bitUnChangedIndex] + 1);
    // non-changed part + carry bit  (carry happens)
    // non-changed part + additional bit  (carry not happenned)
  }
  return ret;  // linear space
}

// II. consider first bit is 1 or 0
var countBits = function(num) {
  var ret = [0];
  for (var i = 1; i < num + 1; i++) {      // linear time
    ret.push(ret[i >> 1] + i%2 );  // reuse bit sequence (1~N)
  }
  return ret;  // linear space
}
