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

    // for a sequence X with constant diff in length N, X can have (N-2) + (N-3) + (N-4) +...+ 1 sub sequence with constant diff
        // or saying 1 + 2 + 3 + ... + (N-3) + (N-2)
    var accu = 0, sum = 0;
    var startInd = 0;
    var arrs = [];

    for (var i = 2; i < A.length ; i ++){   // start from 2nd
        if (A[i] + A[i-2] === 2*A[i-1]) {   // last 3 element qualified
            if( accu ===0 ) { startInd = i-2; }
            accu += 1;
            for (var x=0; x<accu; x++) { arrs.push(A.slice(startInd+x, i+1))}
            sum += accu;  // for length n sequence, it has 1 + 2 + 3 + ... + (N - 2)
            // start with 3rd element
        } else {
            accu = 0;
        }
    }
    console.log(arrs);
    return sum;

};

console.log(numberOfArithmeticSlices([1,2,3,4,6,7,8]));  // 4
console.log(numberOfArithmeticSlices([1,2,1]));  // 0
