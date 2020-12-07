// 445. 两数相加 II
// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。



// 进阶：

// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

// https://leetcode-cn.com/problems/add-two-numbers-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function reverseList (head) {
    let pre = null
    let cur = head
    let next
    while (cur) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
  let r1 = reverseList(l1)
  let r2 = reverseList(l2)
  let dummy = new ListNode()
  let cur = dummy
  let temp = 0
  while (r1 || r2 || temp == 1) {
    let val = (r1 ? r1.val : 0) + (r2 ? r2.val : 0) + temp
    temp = Math.floor(val / 10)
    cur.next = new ListNode(val % 10)
    if (r1) r1 = r1.next
    if (r2) r2 = r2.next
    cur = cur.next
  }
  return reverseList(dummy.next)
};


// 进阶版
// 用栈，依次压入值，再出栈进行相加操作；
// 相加结果是从个位开始，生成的节点，依次追到到结果链表上即可。


// var addTwoNumbers = function (l1, l2) {
//   let stack1 = [];
//   let stack2 = [];
//   while (l1) {
//     stack1.push(l1.val);
//     l1 = l1.next;
//   }
//   while (l2) {
//     stack2.push(l2.val);
//     l2 = l2.next;
//   }
//   let mark = 0;
//   let res = null;
//   while (stack1.length > 0 || stack2.length > 0 || mark !== 0) {
//     let val1 = stack1.length > 0 ? stack1.pop() : 0;
//     let val2 = stack2.length > 0 ? stack2.pop() : 0;
//     let val = val1 + val2 + mark;
//     mark = val / 10 | 0;
//     curNode = new ListNode(val % 10);
//     curNode.next = res;
//     res = curNode;
//   }
//   return res;
// };



