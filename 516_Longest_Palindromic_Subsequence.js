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
  var track = [];

  for (var i = 0; i<n; i++) {
    var tmp = [];
    var _tmp2 = [];
    for (var x = 0; x<n; x++) {
      tmp.push(0);
      _tmp2.push(0);
    }
    tmp[i] = 1;
    dp.push(tmp);
    // put 1 in vice diagonal
    track.push(_tmp2);
  }

  // DEFINE track data
  // 0: undefined
  // 1: use data from left, cut right char
  // 2: use data from bottom, cut left char
  // 3: use data from left-bottom, cut both right and left

  for (i = n-1; i >= 0; i--) {

    for (var j = i+1; j<n; j++) {

      if (s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2;
        track[i][j] = 3;
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
        if (dp[i][j-1] > dp[i+1][j]) {
            track[i][j] = 1;
        } else {   // less or equal
            track[i][j] = 2;
        }
      }
    }
  }
  var printContent = [];
  // print string by track http://www.csie.ntnu.edu.tw/~u91029/Palindrome.html#2
  var print = function(i, j){
      if (i>j) return;
      if (i === j) {
          printContent.push(s[i]);
      }
      else if (track[i][j] === 3) {
          printContent.push(s[i]);
          print(i+1, j-1);
          printContent.push(s[i]);
      } else if (track[i][j] === 1) {  // cut right
          print(i, j-1);
      } else { // cut left
          print(i+1, j);
      }
  }
  print(0, s.length-1);
  console.log(printContent.join(''));

  return dp[0][n-1];
};


console.log(longestPalindromeSubseq('aba'));        // aba 3
console.log(longestPalindromeSubseq('aaaaa'));      // aaaaa 5
console.log(longestPalindromeSubseq('bbbab'));      // bbbb 4
console.log(longestPalindromeSubseq('abacaba'));    // abacaba 7
