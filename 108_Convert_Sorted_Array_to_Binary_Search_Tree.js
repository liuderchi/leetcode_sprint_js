/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    var mid = Math.floor((nums.length+1)/2)-1;
    var rightSubtree = sortedArrayToBST(nums.slice(mid+1, nums.length));
    var leftSubtree = sortedArrayToBST(nums.slice(0, mid));

    root = new TreeNode(nums[mid]);
    root.left = leftSubtree;
    root.right = rightSubtree;

    return root;
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));
console.log(sortedArrayToBST([5,9]));
