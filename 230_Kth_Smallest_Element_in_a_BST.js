/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    function cnt(root){
        if (root === null) return 0;
        return 1 + cnt(root.left) + cnt(root.right);
    }

    var qty = cnt(root.left);
    if (qty+1 == k) {
        return root.val;
    } else if ((qty+1) < k) {
        return kthSmallest(root.right, k-(qty+1));
    } else {
        return kthSmallest(root.left, k);
    }

};
