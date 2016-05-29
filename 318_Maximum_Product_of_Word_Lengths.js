// Given a string array words, find the maximum value of
// length(word[i]) * length(word[j]) where the two words do not share common letters.
// You may assume that each word will contain only lower case letters. If no such two words exist, return 0.
//
// Example 1:
//
// Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
// Return 16
// The two words can be "abcw", "xtfn".
//
// Example 2:
//
// Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
// Return 4
// The two words can be "ab", "cd".
//
// Example 3:
//
// Given ["a", "aa", "aaa", "aaaa"]
// Return 0
// No such pair of words.

function WordStat(word){
    var b = {};
    for (var i = 0; i < word.length; i++) {
        if (b[word[i]] === undefined) {
            b[word[i]] = true;
        }
    }
    this.bkt = b;
    this.len = word.length;
}

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {

    if (words.length === 0) return words;

    // sort with length
    words.sort(function(a,b){return a.length-b.length;});

    var stack = [],  // stack of WordStat
        ans = 0;

    function hasCommonLetter(ws1, ws2){
        for(var i in ws1.bkt) {
            if (i in ws2.bkt) {
                return true;
            }
        }
        return false;
    }

    function isSameWS(ws1, ws2){
        for(var i in ws1.bkt) {
            if (!(i in ws2.bkt)) {
                return false;
            }
        }
        return true;
    }


    var pushFlg = true;
    stack.push(new WordStat(words.pop()));

    while (words.length > 0){
        var curWS = new WordStat(words.pop());

        pushFlg = true;
        for (var i = 0; i < stack.length; i++){

            if (isSameWS(stack[i], curWS) === true) {
                pushFlg = false;
                if (curWS.len > stack[i].len) stack[i] = curWS;
                break;
            }

            if (hasCommonLetter(stack[i], curWS) === false) {
                var product = stack[i].len * curWS.len;
                ans = (product > ans) ? product : ans;
            }
        }

        if (pushFlg) {
            stack.push(curWS);
        }
    }
    return ans;
};

// NOTE timeout for massive redundent

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
