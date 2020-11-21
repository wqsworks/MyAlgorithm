/* 我们先来看一道基础题目：

真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:
输入: 1->1->2->3->3
输出: 1->2->3
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let cur = head
  while (cur != null && cur.next != null) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head;
};


/* 删除问题的延伸——dummy 结点登场
真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3 */



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

// 类似于快慢指针
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val == cur.next.next.val) {
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        // 若有，则删除
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
};