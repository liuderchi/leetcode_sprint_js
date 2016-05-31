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
var deleteDuplicates = function(head) {

    var cur = head,
        runner = null;
    while (cur !== null) {
        runner = cur.next;
        while ((runner !== null) && (runner.val === cur.val)) {
            runner = runner.next;
        }
        // this point runner find firmly next node, filtered dup nodes
        cur.next = runner;
        cur = runner;
    }

    return head;
};
