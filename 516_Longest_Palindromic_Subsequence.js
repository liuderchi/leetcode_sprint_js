/*
// https://leetcode.com/problems/longest-palindromic-subsequence/#/description
// http://bookshadow.com/weblog/2017/02/12/leetcode-longest-palindromic-subsequence/

  dp[i][j] = dp[i+1][j-1] + 2             if s[i] = s[j]
           = max(dp[i+1][j], dp[i][j-1])  otherwise

1. init dp[][]
  - dp is square matrix
  - dp[i][j] = 1 if i = j otherwise 0

2. calculate dp[i][j] from diagonal
  - start from upper right

3. return dp[0][n-1]

*/

var longestPalindromeSubseq = function(s) {
  var n = s.length;
  var dp = [];

  for (var i = 0; i<n; i++) {
    var tmp = [];
    for (var x = 0; x<n; x++) tmp.push(0);
    tmp[i] = 1;
    dp.push(tmp);
    // put 1 in vice diagonal
  }

  for (i = n-1; i >= 0; i--) {

    for (var j = i+1; j<n; j++) {

      if (s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
      }
    }
  }
  return dp[0][n-1];
};


// console.log(longestPalindromeSubseq('aba'));        // 3
// console.log(longestPalindromeSubseq('aaaaa'));      // 5
console.log(longestPalindromeSubseq('bbbab'));         // 4
// console.log(longestPalindromeSubseq('abacaba'));    // 7
