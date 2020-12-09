// 148. 排序链表
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// 进阶：

// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 偷懒的方式
// var sortList = function (head, r = []) {
//   if (!head) return null
//   while (head) {
//     r.push(head)
//     var tmp = head.next
//     head.next = null
//     head = tmp
//   }
//   r.sort((a, b) => a.val - b.val).reduce((p, v) => p.next = v)
//   return r[0]
// };




