/**
 * @param {number[]} nums
 * @return {number[]}
 */

function CursorFromStart(nums){
    // NOTE cursor to an array recording product in left side
    this.index = 1;
    this.productLeft = nums[0];
    this.offsetRight = function(){
        this.productLeft = this.productLeft * nums[this.index];
        this.index++;
    };
}

function CursorFromEnd(nums){
    // NOTE cursor to an array recording product in right side
    this.index = 0;
    this.productRight = productRightSide(1, nums);   // NOTE start from index 1
    this.offsetRight = function(){
        if (nums[this.index+1] !== 0){
            this.productRight = this.productRight / nums[this.index+1];
        } else {
            this.productRight = productRightSide(this.index+2, nums);
        }
        this.index++;
    };
}

function productRightSide(index, array){
    var result = 1;
    array.slice(index, array.length).forEach(function(n){
        result *= n;
    });
    return result;
}

var productExceptSelf = function(nums) {

    var result = [],
        cur = new CursorFromStart(nums),
        curFromEnd = new CursorFromEnd(nums);

    // get first result from curFromEnd
    result.push(curFromEnd.productRight);
    curFromEnd.offsetRight();

    // NOTE start from index 1
    for (var i = 1; i < nums.length; i++) {
        result.push(cur.productLeft * curFromEnd.productRight);
        cur.offsetRight();
        curFromEnd.offsetRight();
    }

    return result;
};


// NOTE SPACE limit in this problem
// don't create another array to store intermediate values
