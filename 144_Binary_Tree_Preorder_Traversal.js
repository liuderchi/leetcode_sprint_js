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
var preorderTraversal = function(root) {

    var result = [];

    function traversal(node){
        if (node === null) return ;
        result.push(node.val);
        traversal(node.left);
        traversal(node.right);
    }

    traversal(root);
    return result;
};


var preorderTraversal_NO_RECURSIVE = function(root) {

    if (root === null) return [];

    var result = [],
        stack = [];

    stack.push(root);

    while (stack.length > 0){
        var cur = stack.pop();
        result.push(cur.val);

        // NOTE preorder traversal: root, left, right
        // it is stack (FIFO) so push right then left
        if (cur.right !== null) stack.push(cur.right);
        if (cur.left !== null) stack.push(cur.left);
    }
    return result;
};

// NOTE www.csie.ntnu.edu.tw/~u91029/BinaryTree.html
