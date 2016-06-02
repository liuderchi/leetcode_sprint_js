// Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var fastNode = head,
        slowNode = head;

    while (fastNode !== null && fastNode.next !== null) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
        if (fastNode === slowNode) {
            return true;
        }
    }
    return false;
};
