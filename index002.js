
//   Definition for singly-linked list.
//   function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
// }


//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}

var addTwoNumbers = function (l1, l2) {
    let sumlistnode = new ListNode(0)
    let head = sumlistnode
    let addone = 0
    while (addone || l1 || l2) {
        let l1v = l1 === null ? 0 : l1.val
        let l2v = l2 === null ? 0 : l2.val
        let lsum = addone + l1v + l2v
        addone = lsum >= 10 ? 1 : 0
        sumlistnode.next = new ListNode(lsum % 10)
        sumlistnode = sumlistnode.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next
};