// https://leetcode.com/problems/arithmetic-slices/#/description

// http://bookshadow.com/weblog/2016/10/09/leetcode-arithmetic-slices/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    if (A.length<3) {
        return 0;
    }

    // for a sequence X with constant diff in length N, X can have (N-2) + (N-3) + (N-4) +...+ 1
    var accu = 0, sum = 0;

    for (var i = 2; i < A.length ; i ++){
        if (A[i] + A[i-2] === 2*A[i-1]) {   // last 3 element qualified
            accu += 1;
            sum += accu;  // for length n sequence, it has 1 + 2 + 3 + ... + (N - 2)
            // start with 3rd element
        } else {
            accu = 0;
        }
    }
    return sum;

};
