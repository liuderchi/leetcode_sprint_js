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
var maxDepth = function(root) {

    var dfs = function(node, depth){   //NOTE depth-first-search
        if (node === null){
            return depth;
        } else {
            return Math.max(dfs(node.left, depth+1), dfs(node.right, depth+1));
        }
    };

    return dfs(root, 0);
};
