/*
真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let dummy = new ListNode()
  dummy.next = head
  let p = dummy
  for (let i = 0; i < m - 1; i++) {
    p = p.next
  }
  let lefthead = p
  let start = p.next
  let pre = start
  let cur = pre.next
  for (m; m < n - 1; m++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  start.next = cur
  lefthead.next = pre
  return dummy.next
}