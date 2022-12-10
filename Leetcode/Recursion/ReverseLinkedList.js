/** [LeetCode] Recursion - Reverse Linked List
 * Created by jylee on 2021-02-07
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  function traverse(node) {
    if (node === null) return;

    traverse(node.next);
    console.log(node);
    return node;
  }

  traverse(head);
};

const n5 = ListNode(5, null);
const n4 = ListNode(4, n5);
const n3 = ListNode(3, n4);
const n2 = ListNode(2, n3);
const head = ListNode(1, n2); 
console.log(head);

reverseList(head);
