/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let carriedOver = 0
    // Recursive function for creating list nodes with total sum of numbers between two linked lists
    const iter = (n1, n2, carried = 0) => {

        if (!n1 && !n2 && !carried) return null;
        // sum of node
        let newVal = (n1?.val || 0) + (n2?.val || 0) + carried;
        // Carry over the one if the sum is more than 9
        if (newVal > 9) {
            carriedOver = 1
            newVal = newVal - 10
        } else {
            carriedOver = 0
        }
        // sum of the next node using recursion, passing the carried number ( 0 or 1 )
        const nextNode = iter(n1?.next, n2?.next, carriedOver);
        return new ListNode(newVal, nextNode);
    }
    return iter(l1, l2);
};