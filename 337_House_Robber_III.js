/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {

    function robHelp(root) {

        if (root === null) {
            return [0, 0];
        }

        var left = robHelp(root.left);
        var right = robHelp(root.right);

        return [root.val + left[1] + right[1],
                Math.max(left[0], left[1]) + Math.max(right[0], right[1])];
    }

    var res = robHelp(root);

    return Math.max(res[0], res[1]);
};
