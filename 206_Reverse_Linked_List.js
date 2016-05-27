/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return null;

    var nodeStack = [],
        cur = head,
        ret = null;

    while (cur !== null) {
        nodeStack.push(cur);
        cur = cur.next;
    }

    ret = nodeStack[nodeStack.length-1];

    while (true) {
        cur = nodeStack.pop();
        if (nodeStack.length > 0){
            cur.next = nodeStack[nodeStack.length-1];
        } else {
            cur.next = null;
            break;
        }
    }
    return ret;
};
