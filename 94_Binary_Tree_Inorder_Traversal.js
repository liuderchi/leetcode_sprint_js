/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    var result = [];

    function traversal(node){
        if (node === null) return ;
        traversal(node.left);
        result.push(node.val);
        traversal(node.right);
    }

    traversal(root);
    return result;
};

// NOTE www.csie.ntnu.edu.tw/~u91029/BinaryTree.html
