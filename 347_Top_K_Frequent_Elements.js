/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var bucket = {},
        bucketAsArray = [],
        result = [];

    function count(n) {
        if(!bucket[n]) {
            bucket[n] = 1;
        } else {
            bucket[n] += 1;
        }
    }

    function objToArray(obj){
        var result = [];
        for (var key in obj) {
            result.push([key, obj[key]]);
        }
        return result;
    }

    function sanitize(n){
        return parseInt(n);
    }

    nums.forEach(count);

    // parse obj to array
    bucketAsArray = objToArray(bucket);
    // sort by value (descending)
    bucketAsArray.sort(function(a,b){ return b[1]-a[1];});

    for (var i = 0; i < k; i++) {
        result.push(bucketAsArray[i][0]);
    }
    return result.map(sanitize);

};
