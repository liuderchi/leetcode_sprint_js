// https://leetcode.com/problems/count-numbers-with-unique-digits/#/description
// http://bookshadow.com/weblog/2016/06/13/leetcode-count-numbers-with-unique-digits/


/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
   if (n === 0) return 1;

   var f = [9];  // non-repeat count in length n
   for (var i = 1; i < n; i++) {
       f.push(f[i-1]*(10-i)); // [1~9], [1~9][0~9]
   }
   return 1 + f.reduce(function(a,b){return a+b}, 0)

   // n = 1, f(n) = 9
   // n = 2, f(n) = 9 * 9
   // n = 3, f(n) = 9 * 9 * 8
   // n = 4, f(n) = 9 * 9 * 8 * 7

   // ans(2) = f(1) + f(2) + 1
   // ans(3) = f(1) + f(2) + f(3) + 1
};


for (var i = 0; i < 10; i ++) {
  console.log(countNumbersWithUniqueDigits(i));
}
