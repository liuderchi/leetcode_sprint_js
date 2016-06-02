/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {

    // NOTE handle nodes in BFS order, create link when a layer is traversed

    if (root === null) return ;

    var queue = [],
        nodesSameLayer = [],  // container for nodes in same layer
        counter = 0;

    // init queue
    queue.push(root);

    while (queue.length !== 0){
        var cur = queue.shift();   // dequeue
        nodesSameLayer.push(cur);

        if( nodesSameLayer.length === Math.pow(2, counter)) {
            // link all nodes in the array
            for (var i = 0; i < nodesSameLayer.length-1; i++) {
                nodesSameLayer[i].next = nodesSameLayer[i+1];
            }
            nodesSameLayer.length = 0; // clear array
            counter++;
        }

        if (cur.left !== null) queue.push(cur.left);
        if (cur.right !== null) queue.push(cur.right);
    }

};
