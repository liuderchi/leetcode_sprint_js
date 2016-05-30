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
var oddEvenList = function(head) {

    if(head) {} else { return head; }

    var evenHead = head.next,
        oddHead = head,
        curEven = evenHead,
        curOdd = oddHead;

    while (curEven && curEven.next){
        //1->2->3->4->5->NULL,
        curOdd.next = curEven.next; // update next, then update node
        curOdd = curOdd.next;
        curEven.next = curOdd.next;
        curEven = curEven.next;
    }

    curOdd.next = evenHead;

    return head;
};
