/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    // NOTE both p and q are empty
    if ((p === null) && (q === null)){
        return true;
    }

    try {
        if ((p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
            return true;
        }
    } catch (e) {
        // NOTE enable null.val operation
    }
    return false;

};
