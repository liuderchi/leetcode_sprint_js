/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // NOTE root is tree root, which should return in the end
    // NOTE input/output of this problem is a representation; NOT array

    var reverse = function(node){
        if ((node === null) || (node === undefined)) return;

        var temp = node.left;
        node.left = node.right;
        node.right = temp;

        reverse(node.left);
        reverse(node.right);
    };

    reverse(root);
    return root;
};
